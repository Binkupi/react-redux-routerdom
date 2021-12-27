//Chứa các action để dispatch thay đổi các state trong redux

import * as types from './../constants/ActionTypes'
import callApi from './../utils/apiCaller'
//Xử lý render sản phẩm
export const fetchProducts=(products)=>{
    return{
        type:types.FETCH_PRODUCTS,
        products,
    }
}

export const fetchProductsRequest=()=>{
    return (dispatch)=>{
        return callApi('products','GET',null)
            .then(res=>{
                dispatch(fetchProducts(res.data));
            })
    }
}

//Thêm sản phẩm
export const saveProduct=(product)=>{
    return{
        type:types.SAVE_PRODUCT,
        product,
    }
}

export const addProductRequest=(product)=>{
    return(dispatch)=>{
        return callApi('products','POST',{
            name:product.name,
            status:product.status,
            price:product.price,
        }).then(res=>{
            dispatch(saveProduct(res.data));
            
        })
    }
}

//cập nhật sản phẩm
export const updateProductRequest=(product)=>{
    return(dispatch)=>{
        return callApi(`products/${product.id}`,'PUT',{
            id:product.id,
            name:product.name,
            status:product.status,
            price:product.price,
        })
        .then(res=>{
            dispatch(saveProduct(product));
        })
    }
}

//lấy sản phẩm cần edit
export const getItemEditting=(product)=>{
    return{
        type:types.GET_ITEM_EDITTING,
        product,
    }
}

export const getItemEdittingRequest=(id)=>{
    return(dispatch)=>{
        return callApi(`products/${id}`,'GET',null)
        .then(res=>{
            dispatch(getItemEditting(res.data));       
        })
    }
}

//xóa sản phẩm
export const deleteProduct=(id)=>{
    return{
        type:types.DELETE_PRODUCT,
        id,
    }
}

export const deleteProductRequest=(id)=>{
    return (dispatch)=>{
        return callApi(`products/${id}`,'DELETE',null)
            .then(res=>{
                dispatch(deleteProduct(id));
            })
    }
}