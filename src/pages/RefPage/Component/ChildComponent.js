import React, { useImperativeHandle} from "react";

//sử dụng ref để component cha có thể truy cập thuộc tính con,
//  có thể thay thế cho props, nhưng không khuyến khích
const Child = React.forwardRef((props, ref) => {
  const [text, setText] = React.useState("");
  const [number, setNumber] = React.useState(1);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  //dùng để cho component cha sử dụng các hàm con bằng ref
  useImperativeHandle(ref, () => ({
    incrseaseNumber: () => setNumber(number + 1),
    returnText: () => text,
    text:text,
    setText:setText,
  }));
  console.log('className', props.className)
  return (
    //Cần bao quanh component 1 prop className từ styledComponent để nhận css
    <div className={props.className}> 
      <div className="child_container">
          <input type="text" onChange={handleChange} />
          <p>Số lượng: <b>{number}</b></p>
          {/* truyền props theo dạng children */}
          {props.children}
      </div>
    </div>
    
  );
});

export default Child;