const initialState={
    value : 0,
    multiplier:1,
}

export const counterValue = ( state = initialState , action) =>{
    switch(action.type){
        case "INCREMENT" :
            if(action.multiplier===state.multiplier){
                return{
                    ...state,
                    value:state.multiplier+state.value
                }
            }else{
                return{
                    ...state,
                    value:action.multiplier+state.value

                }
            }

        case "DECREMENT" :
            if(action.multiplier===state.multiplier){
                return{
                    ...state,
                    value:state.value-state.multiplier
                }
            }else{
                return{
                    ...state,
                    value:state.value-action.multiplier

                }
            }
        default :
            return{
                ...state,
            } 
    }
}

