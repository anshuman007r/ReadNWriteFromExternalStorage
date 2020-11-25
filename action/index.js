export const increment = (multiplier) =>({
    type : "INCREMENT",
    multiplier
})
export const decrement = (multiplier) =>({
    type : "DECREMENT",
    multiplier
})

export const addTodo =(todo) =>({
    type : 'ADD',
    todo
})

export const toggleTodo = (id) =>({
    type : 'TOGGLE_TODO',
    id
})

export const filter = (value) =>({
    type : 'FILTER',
    value
})