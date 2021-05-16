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
    var replaceState;
    switch(action.type){
        case types.FETCH_PRODUCTS:
            return Object.assign([],[...state], action.products);
        case types.SAVE_PRODUCT:
            replaceState=[...state];
            index=findIndex(replaceState,action.product.id);
            var {product}=action;
            if(index!==-1){
                replaceState[index]=product;
                
            }else
            {
                replaceState.push(product);
            }
            return replaceState; 
        case types.DELETE_PRODUCT:
            replaceState=[...state];
            index=findIndex(replaceState,action.id);
            if(index!==-1){
                replaceState.splice(index,1);
            }   
            return replaceState;       
        default:
            return [...state];
    }
}

export default products;
