import React, { useState } from "react";

export default function Text() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [op, setOp] = useState("+");

    const handleClick = ()=>{
        let n1= Number(num1);
        let n2= Number(num2);
        if(op=='+'){
            setNum3( n1 + n2);
        }
        else if(op=='-'){
            setNum3( n1 - n2);
        }
        else if(op=='/'){
            setNum3( n1 / n2);
        }
        else if(op=='*'){
            setNum3( n1 * n2);
        }
    }

  return (
    <>
      <div style={{ display: "flex" }}>
        <input value={num1} onChange={(event)=>setNum1(event.target.value)}></input>
        <div>{op}</div>
        <input value={num2} onChange={(event)=>setNum2(event.target.value)}></input>
        =
        <div>{num3}</div>
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={()=> setOp("+")}>+</button>
        <button onClick={()=> setOp("-")}>-</button>
        <button onClick={()=> setOp("/")}>/</button>
        <button onClick={()=> setOp("*")}>*</button>
        <button onClick={ handleClick}>=</button>
      </div>
    </>
  );
}
