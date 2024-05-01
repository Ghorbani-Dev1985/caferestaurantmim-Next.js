import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { HiHome } from "react-icons/hi2";
import { HiChevronDoubleLeft } from "react-icons/hi2";

const CustomBreadcrumb = ({hrefTow , textTow , textThree}) => {
    return ( 
        <section>
        <Breadcrumbs color="secondary" variant="solid"  separator={<HiChevronDoubleLeft className="size-5 fill-primary" />}
        
        className="mb-5 font-extrabold text-3xl">
          <BreadcrumbItem href="/"><HiHome className="size-5"/></BreadcrumbItem>
          <BreadcrumbItem href={hrefTow}>{textTow}</BreadcrumbItem>
          {
              textThree &&
              <BreadcrumbItem>{textThree}</BreadcrumbItem>
            }
        </Breadcrumbs>
            </section>
     );
}
 
export default CustomBreadcrumb;