export const AddList = ({id, des})=>{
    return {
        type: "add_List",
        payload: {
            id,
            des,
            sts: "Pending"
    
        }
    }
}
export const delALL = ()=>{
    return {
        type: "del_All",
    }
}
export const filterList = (x)=>{
    return {
        type: "filter_List",
        payload: {
            sts: x,
        },
    }
}
export const delitem = (id)=>{
    return {
        type: "del_Item",
        payload: {
            id: id,
        },
    }
}
export const edititem = ({id, des})=>{
    return {
        type: "edit_Item",
        payload: {
            id,
            des,
        },
    }
}
export const editstatus = ({id,sts})=>{
    return {
        type: "edit_status",
        payload: {
            id,
            sts,
        },
    }
}


