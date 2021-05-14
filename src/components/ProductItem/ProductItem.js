
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class ProductItem extends Component {

    onDeLeTe=(id)=>{
        if(confirm("Bạn có muốn xóa không")){ //eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render(){
        var {product,index}=this.props;
        var statusName=product.status?"Còn hàng":"Đã hết hàng";
        var statusClass=product.status?"warning":"primary";
        return (
            <tr>
                <td >{index+1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <div className={`alert alert-${statusClass}`} role="alert">
                            <strong>{statusName}</strong>
                    </div>
                </td>
                <td>
                    <Link type="button" className="btn btn-primary mr-3" to={`product/${product.id}/edit`}>Sửa</Link>
                    <button type="button" 
                    className="btn btn-danger"
                    onClick={()=>this.onDeLeTe(product.id)}>Xóa</button>
                </td>
            </tr>
        );
    }
  
}

export default ProductItem;
