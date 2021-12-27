
import React, {Component} from 'react'
import {Route,Link} from 'react-router-dom'
const menus=[
    {
        name:'Trang chủ',
        to:'/',
        exact:true,
    },
    {
        name:'Quản lý sản phẩm',
        to:'/product-list',
        exact:false,
    },
    {
        name:'Form',
        to:'/form',
        exact:false,
    }
    ,
    {
        name:'Formik',
        to:'/formik',
        exact:true,
    }
    ,
    {
        name:'FormikHook',
        to:'/formik/hook',
        exact:true,
    }
    ,
    {
        name:'RefPage',
        to:'/ref',
        exact:true,
    }
]
const MenuLink=({label,to,activeOnlyWhenExact})=>{
    return(
        <Route 
        path={to}
        exact={activeOnlyWhenExact}
        children={({match})=>{
            //tạo class cho custom link
            var active=match?'active':'';
            return(
                <div className="nav navbar-nav ">
                    <Link className={`nav-item nav-link ${active}`} to={to}>
                        {label}</Link>
                 </div>
            )
        }}
        
        />
    )
}
class Menu extends Component {
  render(){
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">            
                {this.showMenus(menus)}                         
        </nav>
    );
  }
  showMenus(menus){
    var result=null;
    if(menus.length>0){
        result=menus.map((menu,index)=>{
            return(
                <MenuLink
                key={index}
                  label={menu.name}
                  to={menu.to}
                  activeOnlyWhenExact={menu.exact} />
              )
        })
    }
    return result;
}
}

export default Menu;
