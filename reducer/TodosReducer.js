
const initialState={
    todoList : []
}

let byId = 0
export const addTodo = (state=initialState,action) => {
    console.log(state,action)
    switch(action.type){
        case 'ADD':
            return {
                ...state,
                todoList:state.todoList.concat({
                    id:++byId,
                    todo:action.todo,
                    status : false
                })
            }
        case 'TOGGLE_TODO':
            let todoList =state.todoList 
            todoList[action.id - 1].status = !todoList[action.id - 1].status
            return {
                ...state,
                todoList
            }  
        default:
            return{
                ...state
            }

    }
}
