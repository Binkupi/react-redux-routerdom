
import React, {Component} from 'react'
import Menu from './components/Menu/Menu'
import routes from './routes'
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'

//Compnent gốc của ứng dụng, tạo router ở đây, tìm hiểu react-router-dom để dùng router(Quan trọng)
class App extends Component {
    showContentMenu(routes){
        var result=null;
        if(routes.length>0){
            result=routes.map((route,index)=>{
                return (<Route 
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}/>
                )
            })
        }
        return <Switch>{result}</Switch>;
    }
  render(){
    return (
        <Router>
            <div className="App">
                <Menu />
                <div className="container">
                    <div className="row">
                        {this.showContentMenu(routes)}
                    </div>
                </div>
            </div>    
        </Router>
    );
  }
  
}

export default App;
