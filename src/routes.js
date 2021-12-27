import React from 'react';
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ProductListPage from './pages/ProductListPage/ProductListPage'
import ProductActionPage from './pages/ProductActionPage/ProductActionPage'
import FormPage from './pages/FormPage'
import FormikPage from './pages/FormikPage'
import RefPage from './pages/RefPage'
import FormikHookPage from './pages/FormikPage/FormikHook'

// function chứa các router dùng cho website, tách ra cho tiện nhìn có thể viết chung trong app.js
const routes=[
    {
        path:'/', 
        exact: true, 
        main:()=><HomePage />
    },
    {
        path:'/form', 
        exact: false, 
        main:()=><FormPage />
    },
    {
        path:'/formik', 
        exact: true, 
        main:()=><FormikPage />
    },
    {
        path:'/ref', 
        exact: true, 
        main:()=><RefPage />
    },
    {
        path:'/formik/hook', 
        exact: false, 
        main:()=><FormikHookPage />
    },
    {
        path:'/product-list', 
        exact: false, 
        main:()=><ProductListPage />
    },
    {
        path:'/product/add', 
        exact: false, 
        main:({history})=><ProductActionPage history={history}/>
    },
    {
        path:'/product/:id/edit', 
        exact: false, 
        main:({match,history})=><ProductActionPage match={match}  history={history}/>
    },
    {
        path:'', 
        exact: false, 
        main:()=><NotFoundPage />
    },
    
];
export default routes;