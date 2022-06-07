const initialState = {
    todoList:[
        {
            id: 0,
            des: "Working on TodoApp",
            sts: "In-Progress"
        }
    ]
}

export const todoreducer = (state = initialState, action)=>{
    switch(action.type) {
        case "add_List":
            return {
                ...state,
                todoList: [...state.todoList, action?.payload]
            }
        case "del_All":
            return {
                ...state,
                todoList: [],
            }
        case "filter_List":
            return {
                ...state,
                todoList: state.todoList.filter((item)=>item.sts === action.payload.sts)
            }
        case "del_Item":
            return {
                ...state,
                todoList: state.todoList.filter((item)=>item.id !== action.payload.id)
            }
        case "edit_Item":
            return {
                ...state,
                todoList: state.todoList.map((item)=>{
                    if(item.id === action.payload.id){
                        return {
                            ...item,
                            des:action.payload.des,
                        }
                    }
                    else {
                        return item
                    }
                })
            }
            case "edit_status":
                return {
                    ...state,
                    todoList: state.todoList.map((item)=>{
                        if(item.id === action.payload.id){
                            return {
                                ...item,
                                sts:action.payload.sts,
                            }
                        }
                        else {
                            return item
                        }
                    })
                }
        
        default:
            return state;
    }

}