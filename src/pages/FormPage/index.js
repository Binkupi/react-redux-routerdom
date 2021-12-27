import React from 'react';

//thư viện để hỗ trợ xử lý form
import {useForm} from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers/yup';
//thư viện hỗ trợ validate form
import * as yup from 'yup';
import { string } from 'yup';

const schema = yup.object().shape({
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

const FormPage = () =>{
    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors }
      } = useForm({resolver: yupResolver(schema)});
      const submitForm=(obj)=>{
          console.log(obj);
          setValue('username', 'value')
      }

      return (
          <>
            <form onSubmit={handleSubmit(submitForm)}>
            <div className="form-group">
                <label >Email address</label>
                <input {...register('username')} name="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                {errors.username && 
                <p className="error">{errors.username?.message}</p>}
            </div>
            <div className="form-group">
                <label >Password</label>
                <input {...register('password')} name="password" className="form-control" id="exampleInputPassword1" />
                {/* Nếu có lỗi thì hiển thị nó ra cho người dùng */}
                {errors.password && 
                <p className="error">{errors.password?.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
          </>
      )

}
export default FormPage;

