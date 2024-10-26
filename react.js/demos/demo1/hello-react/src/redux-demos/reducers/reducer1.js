const initialCount = {count:0}

const reducer = (state=initialCount, action) => {

    switch(action.type){
        case "INCREMENT":
            return {count:state.count + 1}
        case "DECREMENT" :
            return {count:state.count - 1}
        default:
            return state;
    }
}
export default reducer
