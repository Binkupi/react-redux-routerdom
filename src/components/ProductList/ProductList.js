import React, {Component} from 'react'
class ProductList extends Component {
  render(){
      var {children}=this.props;//children=this.props.children
    return (       
        <table className="table">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>          
                {children}
            </tbody>
        </table>
    );
  }

  
}

export default ProductList;
