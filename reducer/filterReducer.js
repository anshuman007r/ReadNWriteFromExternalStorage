const initialState ={
    value : 'ALL'
}

export const filter = ( state=initialState, action ) =>{
    switch(action.value){
        case 'DONE' :
            return {
                ...state,
                value : action.value
            }
        case 'NOT_DONE' :
            return {
                ...state,
                value : action.value
            }
        case 'ALL' :
            return {
                ...state,
                value : action.value
            }
        default :
            return {
                ...state
            }
    }
}