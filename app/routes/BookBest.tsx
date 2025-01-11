import { space } from "postcss/lib/list";
import { Books } from "./BookList";
import MyMenu from "./template/mymenu";
import { useState } from "react";

function CompletedCheck ({c} : {c:boolean}){
    if(c)
        return <span>{'💋'}</span>;
    return <span>{'💋'}</span>;

}

export default function ToDolists (){
    const [cpStatus,setStatus] = useState(null)

    const cptoDoBooks = Books.filter((cpToDo: { completed: any; }) => {
        if(cpStatus === null) return true;
        return cpToDo.completed === cpStatus;
    }
        //cpToDo.completed === false
    )
    

    const handleComplete = ( st : any) => {
        setStatus(st) 
    }

    const listItems = Books.map((item:any,index:any) => 
        <div className = "m-3" key={index}>

        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <b className="text-base">
            <CompletedCheck c={item.completed} />
            </b>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title + "(รหัส: " + item.id + ")"}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{item.created}</p>
        </a>

    </div>
    
    );
    return (
        <div className="m-3">
            <MyMenu />
            <h1 className="text-xl">รายการหนังสือ</h1>
            <div className="flex flex-row justify-center">
            <span className="me-2 mb-2 p-3">สถานะ:</span>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>handleComplete(null)}>All</button>
            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"onClick={()=>handleComplete(true)}>Completed</button>
            <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900" onClick={()=>handleComplete(false)}>Incomplete</button>
            </div>
            {listItems}
    
        </div>
      
    );
}