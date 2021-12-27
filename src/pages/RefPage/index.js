import React, { useRef } from "react";
import Child from './Component/ChildComponent'
//thư viện css cho reactjs
import styled from 'styled-components';

//styled component, dùng để thay đổi css component(option thích thì tìm hiểu)
const ChildStyled = styled(Child)`
  .child_container {
    
  }
  .text {
    color:red
  }
  
`

//1 cách nhận props khác ở component(DESTRUCTURING ASSIGNMENT)
const Father = ({className}) => {

  //useRef dùng để hanlde các phần tử dom, như thay đổi style element, set value input 
  // ..., tìm hiểu ref trong reactjs( Sử dụng hơi bị nhiều :)

  const childRef = useRef();

  const showTextInChild = () => {
    const txt = childRef.current.returnText();
    alert(txt);
  };

  const increaseNumberInChild = () => {
    childRef.current.incrseaseNumber();
  };

    return (
      <div className={className} style={{width:'100%', display:'flex',flexDirection:'row',
      justifyContent:'center', marginTop:'50px'}}>
        <div className="form_container">
          <ChildStyled ref={childRef} >
            <p className="text">This is data test</p>
          </ChildStyled>
          <button onClick={showTextInChild} className="btn btn-success">
            Show Text in Child compoent
          </button>
          <p></p>
          <button onClick={increaseNumberInChild} className="btn btn-primary mr-2">
            Increase number in Child compoent
          </button>
        </div>
      </div>
      
    );
}

const FatherStyled = styled(Father)`
  .form_container{
  }
`

export default FatherStyled;