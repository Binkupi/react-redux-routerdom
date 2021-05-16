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
           return Object.assign({},{...state}, action.product);

        default:
            return state;
    }
}
export default itemEditting;