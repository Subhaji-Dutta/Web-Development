
import './App.css';
import List from "./List"
import { useState } from "react";

function App() {
  const [list,setList]=useState([]);
  const [userInput,setInput]=useState("");


  const addItem = () =>{
    // setList([...list,{iteam:list,key:Date.now()}]);
    setList([...list, userInput]);
    setInput("");
  }

//   const deleteItem = key =>{
//     const newList = list.filter(listObj => {
//         return listObj.key !== key;
//     });
//     setList(newList);
// };

const deleteItem = (idx) => {
  let temp = list;
  temp.splice(idx, 1);
  setList(prev=> [...temp]);
}

  return (
    <div className="App">
      <header className="App-header">
        To-do List
    <div className="container">
      <input placeholder="add" value={userInput} onChange={(event)=> setInput(event.target.value)}/>
      <button onClick={addItem}>Add</button>
    </div>
    
    <List list={list} deleteItem={deleteItem}/>
    </header>
    </div>
  );
}

export default App;
