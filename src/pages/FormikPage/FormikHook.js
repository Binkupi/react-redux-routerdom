import React, {useRef} from 'react';
import * as yup from 'yup';

//cách sử dụng khác của formik( sử dụng hook)
import { useFormik } from 'formik'

const FormikHookPage = (props) =>{
    const inputEmail = useRef();
    const onSubmit = (e)=>{
        e.preventDefault();
    }
    yup.setLocale({
        mixed: {
          default: 'Não é válido',
        },
        number: {
          min: 'Số phải lớn hơn {min}',
        },
      });
    const formik = useFormik({
        initialValues: {
            username:'',
            password:'',
            email:''
        },
        validationSchema: yup.object({
            username: yup
                .string('Phải là chuỗi')
                .required(true)
                .min(2,'Gia tri nhap k duoc be hon 2'),
            password: yup
                .string()
                .required('Bạn cần nhập field này')
                .min(5,'Gia tri nhap k duoc be hon 5'),
            email: yup
                .string()
                .email('Không đúng email')
                .required('Bạn cần nhập field này')

        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));  
        }
        
    })

    const onFocusEmail=()=>{
        inputEmail.current.focus();
    }

      return (
          <>
            <form onSubmit={formik.handleSubmit} >
            <div className="form-group">
                <label >Username</label>
                <input  name="username" className="form-control"  aria-describedby="emailHelp" 
                 value={formik.values.username}
                 onChange={formik.handleChange}
                autoComplete="off"
                />
                {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                {formik.errors.username && formik.touched.username &&
                <p className="error text-danger">{formik.errors.username}</p>}
            </div>
            <div className="form-group">
                <label >Password</label>
                <input  name="password" className="form-control" value={formik.values.password} 
                 onChange={formik.handleChange}/>
                {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                {formik.errors.password && formik.touched.password &&
                <p className="error text-danger">{formik.errors.password}</p>}
            </div>
            <div className="form-group">
                <label >Email address</label>
                <input  name="email" className="form-control"  aria-describedby="emailHelp" 
                 value={formik.values.email}
                 onChange={formik.handleChange}
                autoComplete="off"
                ref={inputEmail}
                />
                {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                {formik.errors.email && formik.touched.email &&
                <p className="error text-danger">{formik.errors.email}</p>}
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
            <button type="button" onClick={onFocusEmail}>Handle input email</button>
            </form>
          </>
      )

}

// const FormikForm = withFormik({
//     mapPropsToValues() { // Init form field
//         return {
//             username: '',
//             password:''
//         }
//     },
//     validationSchema: yup.object().shape({
//         username: yup
//         .string()
//         .required("Vui lòng nhập username")
//         .min(2,'Gia tri nhap k duoc be hon 2')
//         .max(50, "username tối da 50 ký tự"),
        
//         password: yup
//         .string()
//         .required("Vui lòng nhập mật khẩu")
//         .max(20, "Mật khẩu tối đa 20 ký tự")
    
//     })
// })(FormikPage)

export default FormikHookPage

