(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{64:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(19),a=n.n(r),i=n(4),u=n(5),o=n(7),s=n(6),d=n(3),l=n(13),h=n(1),j=[{name:"Trang ch\u1ee7",to:"/",exact:!0},{name:"Qu\u1ea3n l\xfd s\u1ea3n ph\u1ea9m",to:"/product-list",exact:!1}],b=function(t){var e=t.label,n=t.to,c=t.activeOnlyWhenExact;return Object(h.jsx)(d.a,{path:n,exact:c,children:function(t){var c=t.match?"active":"";return Object(h.jsx)("div",{className:"nav navbar-nav ",children:Object(h.jsx)(l.b,{className:"nav-item nav-link ".concat(c),to:n,children:e})})}})},p=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)("nav",{className:"navbar navbar-expand navbar-light bg-light",children:this.showMenus(j)})}},{key:"showMenus",value:function(t){var e=null;return t.length>0&&(e=t.map((function(t,e){return Object(h.jsx)(b,{label:t.name,to:t.to,activeOnlyWhenExact:t.exact},e)}))),e}}]),n}(c.Component),m=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("h1",{children:"\u0110\xe2y l\xe0 HomePage"})})}}]),n}(c.Component),O=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("h1",{children:"Kh\xf4ng t\xecm th\u1ea5y trang"})})}}]),n}(c.Component),f=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.children;return Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"STT"}),Object(h.jsx)("th",{children:"M\xe3"}),Object(h.jsx)("th",{children:"T\xean"}),Object(h.jsx)("th",{children:"Gi\xe1"}),Object(h.jsx)("th",{children:"Tr\u1ea1ng th\xe1i"}),Object(h.jsx)("th",{children:"H\xe0nh \u0111\u1ed9ng"})]})}),Object(h.jsx)("tbody",{children:t})]})}}]),n}(c.Component),x=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).onDeLeTe=function(e){confirm("B\u1ea1n c\xf3 mu\u1ed1n x\xf3a kh\xf4ng")&&t.props.onDelete(e)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.product,c=e.index,r=n.status?"C\xf2n h\xe0ng":"\u0110\xe3 h\u1ebft h\xe0ng",a=n.status?"warning":"primary";return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:c+1}),Object(h.jsx)("td",{children:n.id}),Object(h.jsx)("td",{children:n.name}),Object(h.jsx)("td",{children:n.price}),Object(h.jsx)("td",{children:Object(h.jsx)("div",{className:"alert alert-".concat(a),role:"alert",children:Object(h.jsx)("strong",{children:r})})}),Object(h.jsxs)("td",{children:[Object(h.jsx)(l.b,{type:"button",className:"btn btn-primary mr-3",to:"product/".concat(n.id,"/edit"),children:"S\u1eeda"}),Object(h.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return t.onDeLeTe(n.id)},children:"X\xf3a"})]})]})}}]),n}(c.Component),v=n(15),g=n(33),y=n.n(g),k="https://60965f0e116f3f00174b3036.mockapi.io/api";function N(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2?arguments[2]:void 0;return y()({method:e,url:"".concat(k,"/").concat(t),data:n}).catch((function(t){console.log(t)}))}var T="FETCH_PRODUCTS",C="SAVE_PRODUCT",E="GET_ITEM_EDITTING",P="DELETE_PRODUCT",S=function(){return function(t){return N("products","GET",null).then((function(e){var n;t((n=e.data,{type:T,products:n}))}))}},D=function(t){return{type:C,product:t}},R=function(t){return function(e){return N("products","POST",{name:t.name,status:t.status,price:t.price}).then((function(t){e(D(t.data))}))}},q=function(t){return function(e){return N("products/".concat(t),"GET",null).then((function(t){var n;e((n=t.data,{type:E,product:n}))}))}},w=function(t){return function(e){return N("products/".concat(t),"DELETE",null).then((function(n){e(function(t){return{type:P,id:t}}(t))}))}},I=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(t){var c;return Object(i.a)(this,n),(c=e.call(this,t)).findIndex=function(t,e){var n=-1;return t.forEach((function(t,c){t.id===e&&(n=c)})),n},c.onDelete=function(t){c.props.deleteProductRequest(t)},c.state={products:[]},c}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchProductsRequest()}},{key:"renderProductItem",value:function(t){var e=this,n=null;return t.length>0&&(n=t.map((function(t,n){return Object(h.jsx)(x,{index:n,product:t,onDelete:e.onDelete},n)}))),n}},{key:"render",value:function(){var t=this.props.products;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(l.b,{type:"button",className:"btn btn-primary mb-3 mt-4",to:"/product/add",children:"Th\xeam s\u1ea3n ph\u1ea9m"}),Object(h.jsx)(f,{children:this.renderProductItem(t)})]})}}]),n}(c.Component),M=Object(v.b)((function(t){return{products:t.products}}),(function(t){return{fetchProductsRequest:function(){t(S())},addProductRequest:function(e){t(R(e))},deleteProductRequest:function(e){t(w(e))}}}))(I),G=n(34),L=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(t){var c;return Object(i.a)(this,n),(c=e.call(this,t)).onChange=function(t){var e=t.target,n=e.name,r="checkbox"===e.type?e.checked:e.value;c.setState(Object(G.a)({},n,r))},c.onSubmit=function(t){var e=c.state,n=e.txtName,r=e.txtPrice,a=e.ckbStatus,i=e.id,u={id:i,name:n,price:r,status:a},o=c.props.history;t.preventDefault(),""!==i?(c.props.updateProductRequest(u),o.goBack()):(c.props.addProductRequest(u),o.goBack())},c.state={id:"",txtName:"",txtPrice:"",ckbStatus:!1},c}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match;if(t){var e=t.params.id;this.props.getItemEdittingRequest(e)}}},{key:"UNSAFE_componentWillReceiveProps",value:function(t){if(t&&t.itemEditting){var e=t.itemEditting;this.setState({id:e.id,txtName:e.name,txtPrice:e.price,ckbStatus:e.status})}}},{key:"render",value:function(){var t=this.state,e=t.txtName,n=t.txtPrice,c=t.ckbStatus;return Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(h.jsx)("input",{type:"text",name:"txtName",value:e,className:"form-control",onChange:this.onChange})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Gi\xe1 s\u1ea3n ph\u1ea9m"}),Object(h.jsx)("input",{type:"number",name:"txtPrice",value:n,className:"form-control",onChange:this.onChange})]}),Object(h.jsx)("label",{children:"Tr\u1ea1ng th\xe1i"}),Object(h.jsx)("div",{className:"form-check",children:Object(h.jsxs)("label",{className:"form-check-label",children:[Object(h.jsx)("input",{type:"checkbox",className:"form-check-input",name:"ckbStatus",value:c,onChange:this.onChange,checked:c?"checked":""}),"C\xf2n h\xe0ng"]})}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary mr-4",children:"L\u01b0u l\u1ea1i"}),Object(h.jsx)(l.b,{to:"/product-list",className:"btn btn-danger",children:"Tr\u1edf v\u1ec1"})]})})}}]),n}(c.Component),F=Object(v.b)((function(t){return{products:t.products,itemEditting:t.itemEditting}}),(function(t){return{addProductRequest:function(e){t(R(e))},updateProductRequest:function(e){t(function(t){return function(e){return N("products/".concat(t.id),"PUT",{id:t.id,name:t.name,status:t.status,price:t.price}).then((function(n){e(D(t))}))}}(e))},getItemEdittingRequest:function(e){t(q(e))}}}))(L),_=[{path:"/",exact:!0,main:function(){return Object(h.jsx)(m,{})}},{path:"/product-list",exact:!1,main:function(){return Object(h.jsx)(M,{})}},{path:"/product/add",exact:!1,main:function(t){var e=t.history;return Object(h.jsx)(F,{history:e})}},{path:"/product/:id/edit",exact:!1,main:function(t){var e=t.match,n=t.history;return Object(h.jsx)(F,{match:e,history:n})}},{path:"",exact:!1,main:function(){return Object(h.jsx)(O,{})}}],B=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"showContentMenu",value:function(t){var e=null;return t.length>0&&(e=t.map((function(t,e){return Object(h.jsx)(d.a,{path:t.path,exact:t.exact,component:t.main},e)}))),Object(h.jsx)(d.c,{children:e})}},{key:"render",value:function(){return Object(h.jsx)(l.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{}),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:this.showContentMenu(_)})})]})})}}]),n}(c.Component),U=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))},A=n(17),H=n(18),W=[],J=function(t,e){var n=-1;return t.forEach((function(t,c){t.id===e&&(n=c)})),n},K=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case T:return e=n.products,Object(H.a)(e);case C:t=J(e,n.product.id);var c=n.product;return-1!==t?e[t]=c:e.push(c),Object(H.a)(e);case P:return-1!==(t=J(e,n.id))&&e.splice(t,1),Object(H.a)(e);default:return Object(H.a)(e)}},Q={id:"",name:"",price:0,status:!1},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case E:return t=e.product;default:return t}},X=Object(A.b)({products:K,itemEditting:V}),z=n(35),Y=Object(A.c)(X,Object(A.a)(z.a));a.a.render(Object(h.jsx)(v.a,{store:Y,children:Object(h.jsx)(B,{})}),document.getElementById("root")),U()}},[[64,1,2]]]);
//# sourceMappingURL=main.ef27021d.chunk.js.map