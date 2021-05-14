
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as actions from './../../actions/index'
import {connect} from 'react-redux'
class ProductActionPage extends Component {
    constructor(props) {
      super(props);
      this.state={
        id:'',
        txtName:'',
        txtPrice:'',
        ckbStatus:false,
      }
    }

    componentDidMount(){
      var {match}=this.props;
      if(match){
        var id=match.params.id;
        this.props.getItemEdittingRequest(id);

      }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
      if(nextProps&&nextProps.itemEditting){
        var {itemEditting}=nextProps;
        this.setState({
          id:itemEditting.id,
          txtName:itemEditting.name,
          txtPrice:itemEditting.price,
          ckbStatus:itemEditting.status,
        })
      }
    }
    onChange=(e)=>{
      var target=e.target;
      var name=target.name;
      var value=target.type==='checkbox'?target.checked:target.value;
      this.setState({
        [name]:value,
      })
    }
    onSubmit=(e)=>{
        var {txtName,txtPrice,ckbStatus,id}=this.state;
        var product={
          id:id,
          name:txtName,
          price:txtPrice,
          status:ckbStatus,
        }
        var {history}=this.props;
        e.preventDefault();
        if(id!==''){
            this.props.updateProductRequest(product);
            history.goBack();
        }
        else{
            this.props.addProductRequest(product);
            history.goBack();
        }
        
        

    
    }
  render(){
      var {txtName,txtPrice,ckbStatus}=this.state;
    return (
        <div className="col-md-6">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                        <label >Tên sản phẩm</label>
                        <input type="text" 
                        name="txtName" 
                        value={txtName} 
                        className="form-control"  
                        onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label >Giá sản phẩm</label>
                    <input type="number"
                    name="txtPrice"
                    value={txtPrice} 
                    className="form-control"
                    onChange={this.onChange}  />
                </div>
                    <label >Trạng thái</label>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" 
                        className="form-check-input"
                        name="ckbStatus" 
                        value={ckbStatus}  
                        onChange={this.onChange}
                        // checked={this.state.ckbStatus}
                        checked={ckbStatus?'checked':''}
                        />
                        Còn hàng
                    </label>
                </div>
                <button type="submit" className="btn btn-primary mr-4">Lưu lại</button>     
                <Link to='/product-list' className='btn btn-danger'>Trở về</Link>          
            </form>
        </div>
            
    );
  }
  
}

const mapStateToProps=(state)=>{
  return{
      products:state.products,
      itemEditting:state.itemEditting
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
      addProductRequest:(product)=>{
          dispatch(actions.addProductRequest(product))
      },
      updateProductRequest:(product)=>{
        dispatch(actions.updateProductRequest(product))
      },
      getItemEdittingRequest:(id)=>{
        dispatch(actions.getItemEdittingRequest(id));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);

