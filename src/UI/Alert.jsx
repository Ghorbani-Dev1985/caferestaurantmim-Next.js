import { BiInfoCircle } from "react-icons/bi";
const Alert = ({alertText}) => {
    return (  <div className="w-full flex items-center gap-1 bg-sky-100 text-sky-500 px-4 py-3 font-extrabold rounded-xl"><BiInfoCircle className="stroke-sky-500 size-5"/>{alertText}</div> );
}
 
export default Alert;