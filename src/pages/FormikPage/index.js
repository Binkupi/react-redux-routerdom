import React from 'react';
import * as yup from 'yup';
//thư viện khác để hỗ trợ xử lý form
import { withFormik } from 'formik'

const FormikPage = (props) =>{

    const onSubmit = (e)=>{
        e.preventDefault();
    }

      return (
          <>
            <form onSubmit={onSubmit} >
            <div className="form-group">
                <label >Email address</label>
                <input  name="username" className="form-control"  aria-describedby="emailHelp" 
                value={props.values.username}
                onChange={props.handleChange}
                autocomplete="off"
                />
                {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                {props.errors.username && 
                <p className="error text-danger">{props.errors.username}</p>}
            </div>
            <div className="form-group">
                <label >Password</label>
                <input  name="password" className="form-control" value={props.values.password} 
                 onChange={props.handleChange}/>
                {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                {props.errors.password && 
                <p className="error text-danger">{props.errors.password}</p>}
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
          </>
      )

}

const FormikForm = withFormik({
    mapPropsToValues() { // Init form field
        return {
            username: '',
            password:''
        }
    },
    validationSchema: yup.object().shape({
        username: yup
        .string()
        .required("Vui lòng nhập username")
        .min(2,'Gia tri nhap k duoc be hon 2')
        .max(50, "username tối da 50 ký tự"),
        
        password: yup
        .string()
        .required("Vui lòng nhập mật khẩu")
        .max(20, "Mật khẩu tối đa 20 ký tự")
    
    })
})(FormikPage)

export default FormikForm

