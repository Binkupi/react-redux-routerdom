import * as types from './../constants/ActionTypes'

var initialState={
    id:'',
    name:'',
    price:0,
    status:false,
}

const itemEditting=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_ITEM_EDITTING:
            state=action.product;
           return state;

        default:
            return state;
    }
}
export default itemEditting;