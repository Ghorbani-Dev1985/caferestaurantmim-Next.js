import React from 'react'

const Table = ({children}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-gray-500 dark:text-gray-400">
        {children}
    </table>
    </div>
  )
}

export default Table

function TableHeader({children}){
    return(
        <thead className="font-DanaBold text-white bg-primary-500">
            <tr>{children}</tr>
        </thead>
    )
}

function TableBody({children}){
    return(
        <tbody>

           {children}
        </tbody>
    )
}

function TableRow({children}){
    return(
        <>
          {children}
        </>   
    )
}

Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow