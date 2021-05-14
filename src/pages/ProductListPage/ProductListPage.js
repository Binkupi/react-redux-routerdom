
import React, {Component} from 'react'
import ProductList from './../../components/ProductList/ProductList'
import ProductItem from './../../components/ProductItem/ProductItem'
import {connect} from 'react-redux'
import callApi from './../../utils/apiCaller'
import {Link} from 'react-router-dom'
import* as actions from './../../actions/index'
class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:[],
        }
    }
    componentDidMount(){
        this.props.fetchProductsRequest();
        
    }
    renderProductItem(products){
        var result=null;
        if(products.length>0){
            result=products.map((product,index)=>{
                return(
                    <ProductItem 
                    key={index}
                    index={index}
                    product={product}
                    onDelete={this.onDelete}
                    />
                )
            })
        }
        return result;
    }
    //tìm kiếm vị trí của sản phẩm
    findIndex=(products,id)=>{
        var result=-1;
        products.forEach((product,index)=>{
            if(product.id===id){
                result=index;
            }
        });
        return result;
    }
    //xóa sản phẩm
    onDelete=(id)=>{
    this.props.deleteProductRequest(id); 

    }
    render(){
    //var products=this.props.products;
    var {products}=this.props;
    
    return (
        <div className="container">
            <Link type="button" className="btn btn-primary mb-3 mt-4" to="/product/add">Thêm sản phẩm</Link>
            <ProductList >
                {this.renderProductItem(products)}
            </ProductList>
        </div>
    );
  }
  
}
 const mapStateToProps=(state)=>{
     return{
         products:state.products,
     }
 }
 const mapDispatchToProps=(dispatch)=>{
     return{
         fetchProductsRequest:()=>{
            dispatch(actions.fetchProductsRequest());
         },
         addProductRequest:(product)=>{
             dispatch(actions.addProductRequest(product));
         },
         deleteProductRequest:(id)=>{
             dispatch(actions.deleteProductRequest(id));
         }
     }
 }
export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);
