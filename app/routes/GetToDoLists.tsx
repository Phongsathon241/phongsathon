import { space } from "postcss/lib/list";
import { toDoItem } from "./toDolists";

function CompletedCheck ({c} : {c:boolean}){
    if(c)
        return <span>{'💋'}</span>;

    return <span>{'💋'}</span>;
  //  {c ? <span>&x128077</span> : <span>&x128078</span>; 

   // }
}

export default function ToDolists (){
    const listItems = toDoItem.map((item,index) => 
        <div className = "m-3" key={index}>

        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <b className="text-base">
            <CompletedCheck c={item.compleded} />
            </b>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title + "(รหัส: " + item.id + ")"}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{item.created}</p>
        </a>

    </div>
    

    );
    return (
        <div className="m-3">
            <h1 className="text-xl">สิ่งที่ต้องทำ</h1>
            {listItems}
        </div>
      
    );
}