import { Pagination, Table, TableBody, TableCell, TableHeader, TableRow } from "@nextui-org/react";
import { useMemo, useState } from "react";

const CustomTable = ({children , renderCell , itemsArray}) => {
    const [page, setPage] = useState(1);
    const rowsPerPage = 10;
    const pages = Math.ceil(itemsArray.length / rowsPerPage);
    const items = useMemo(() => {
     const start = (page - 1) * rowsPerPage;
     const end = start + rowsPerPage;
     return itemsArray.slice(start, end);
   }, [page, itemsArray]);
    return ( 
        <Table
        aria-label="Example table with client async pagination"
        bottomContent={
            <div className="flex w-full justify-center">
              {
                pages > 1 &&
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
              }
            </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
          th : "text-center first:rounded-tl-none first:rounded-bl-none first:rounded-tr-lg first:rounded-br-lg last:rounded-tr-none last:rounded-br-none last:rounded-tl-lg last:rounded-bl-lg",
          td: "text-center"
        }}
      >
        <TableHeader>
         {children}
        </TableHeader>
       
        <TableBody
         items={items}
        >
   {(item) => (
            <TableRow key={item._id}>
               {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              
            </TableRow>
          )}
        </TableBody>
      </Table>
     );
}
 
export default CustomTable;