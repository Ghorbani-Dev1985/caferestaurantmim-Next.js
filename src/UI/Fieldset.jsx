const Fieldset = ({title , children}) => {
    return ( 
        <fieldset className="rounded-md border border-solid border-gray-300 p-3">
        <legend className="float-none w-auto px-2 text-sm">
          <p className="flex items-center text-lg font-bold">
            {title}
          </p>
        </legend>
        {children}
        </fieldset>
     );
}
 
export default Fieldset;