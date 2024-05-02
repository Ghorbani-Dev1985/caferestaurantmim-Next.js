import { Pagination, Table, TableBody, TableCell, TableHeader, TableRow } from "@nextui-org/react";
import { useMemo, useState } from "react";

const CustomPagination = ({itemsArray}) => {
    const [page, setPage] = useState(1);
    const rowsPerPage = 1;
    const pages = Math.ceil(itemsArray.length / rowsPerPage);
    const items = useMemo(() => {
     const start = (page - 1) * rowsPerPage;
     const end = start + rowsPerPage;
     return itemsArray.slice(start, end);
   }, [page, itemsArray]);
    return (   
                pages >0 &&
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
                classNames={{
                  prev: "rotate-180",
                  next: "rotate-180",
                  forwardIcon: "rotate-180",
                }}
              />
            
     );
}
 
export default CustomPagination;