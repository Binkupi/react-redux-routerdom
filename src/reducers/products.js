import * as types from './../constants/ActionTypes'

var initialState=[
];
var findIndex=(products,id)=>{
    var result=-1;
    products.forEach((product,index)=>{
        if(product.id===id){
            result=index;
        }
    })
    return result;
}
const products=(state=initialState,action)=>{
    var index;
    switch(action.type){
        case types.FETCH_PRODUCTS:
            state=action.products;
            return [...state];
        case types.SAVE_PRODUCT:
            index=findIndex(state,action.product.id);
            var {product}=action;
            if(index!==-1){
                state[index]=product;
                
            }else
            {
                state.push(product);
            }
            return [...state];  
        case types.DELETE_PRODUCT:
            index=findIndex(state,action.id);
            if(index!==-1){
                state.splice(index,1);
            }   
            return [...state];       
        default:
            return [...state];
    }
}

export default products;
