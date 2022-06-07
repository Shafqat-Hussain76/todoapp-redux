import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddList, delALL, filterList, delitem, edititem ,editstatus} from "../actions/index";

export const Display = ()=>{
    const dispatch = useDispatch()
    const list = useSelector((e)=>e.todoreducer.todoList);
    console.log(list);

    const [listId, setListId] = useState(1);
    const [listDes, setListDes] = useState("");
    const [listSta, setListSta] = useState("Done");
    const [editem, setEdItem] = useState("");
    const [edsts, setEdSts] = useState("");

    const addhand = (b)=>{
        try {
            const payload = {
                id:listId,
                des:b,
                
            }
            const action = AddList(payload);
            dispatch(action);
            setListId(()=>listId + 1);

        }catch(err){
            console.log(err)
        }    
    }
    const edithand = (a,b)=>{
        try {
            const payload = {
                id:a,
                des:b,
    
            }
            const action = edititem(payload);
            dispatch(action);
            

        }catch(err){
            console.log(err)
        }    
    }
    const editstat = (a,c)=>{
        try {
            const payload = {
                id:a,
                sts:c,
            }
            const action = editstatus(payload);
            dispatch(action);
            

        }catch(err){
            console.log(err)
        }    
    }
    
    

    return(
        <>
        <button onClick={()=>dispatch(delALL())}>Delete All</button> <br /><hr />
        <button onClick={()=>dispatch(filterList(listSta))}>FILTER List(Done)</button> <br /><hr />
        <input value={listDes} placeholder="Enter todo Task" onChange={(e)=>setListDes(e.target.value)}/>
        <button onClick={()=>addhand(listDes)}>Add in List</button>
        {
            list.map((item)=>{
                return(
                    <>
                        <div key={item.id}>
                            <h5> Your Task is:-{item.des}---- which is :-{item.sts} </h5>
                            <input value={editem} placeholder="edit todo" onChange={(e)=>setEdItem(e.target.value)} />
                            <button onClick={()=>edithand(item.id, editem)}>Edit Task</button>
                            <input value={edsts} placeholder="Done" onChange={(e)=>setEdSts(e.target.value)} /> 
                            <button onClick={()=>editstat(item.id, edsts)}>Done</button>
                            
                            <button onClick={()=>dispatch(delitem(item.id))}>Delete</button>
                        </div>
                        
                    </>
                )
            })
        }
        </>
    )
}