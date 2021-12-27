
import React, {useEffect, useState} from 'react'
import ProductList from './../../components/ProductList/ProductList'
import ProductItem from './../../components/ProductItem/ProductItem'
import {connect} from 'react-redux'
import callApi from './../../utils/apiCaller'
import {Link} from 'react-router-dom'
import * as actions from './../../actions/index'
import { useSelector, useDispatch } from 'react-redux'

//function component (React hook) nên sử dụng cái này
const ProductListPage =(props)=> {
    //hook của redux để dispatch action khi thay đổi state
    const dispatch = useDispatch();
    //hook để lấy state trong redux
    const products = useSelector(state=>state.products);

    //tạo state của component trong react bằng hook useState
    // useState trả về mảng có 2 phần tử, phần tử đầu lưu trữ giá trị state, phần tử thứ 2 trả về 1 function để thay đổi state
    const [isSearch,setIsSearch] = useState(false);



    // 1 hook sẽ tự động chạy phụ thuộc vào dependentcy truyền vào khi component được mount
    //TH này sẽ chạy mỗi khi component render
    useEffect(()=>{

    })
    //TH này sẽ chạy mỗi khi giá trị trong dependency thay đổi
    //đặt tên này là useEffect1
    useEffect(()=>{
        dispatch(actions.fetchProductsRequest());
    },[isSearch])

    // sẽ chạy đúng 1 lần duy nhát khi component được mount
    useEffect(()=>{

    },[])
    const renderProductItem = (products) => {
        var result=null;
        console.log(products);
        if(products.length>0){
            result=products.map((product,index)=>{
                return(
                    <ProductItem 
                    key={index}
                    index={index}
                    product={product}
                    onDelete={onDelete}
                    />
                )
            })
        }
        return result;
    }
    
    //xóa sản phẩm
    const onDelete=(id)=>{
    dispatch(actions.deleteProductRequest(id));
    //set state để render lại component để sử dụng useEffect1
    setIsSearch(!isSearch);
    }
    
    return (
        <div className="container">
            <Link type="button" className="btn btn-primary mb-3 mt-4" to="/product/add">Thêm sản phẩm</Link>
            <ProductList >
                {renderProductItem(products)}
            </ProductList>
        </div>
    );
  
}

export default ProductListPage;
