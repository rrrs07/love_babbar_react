import { useState, useEffect} from 'react'

import './App.css'

function App() {
  const [text, setText] = useState('text');
  //const [name, setName] = useState('rrrs');

  // variation 1 -> every render 
  // useEffect(() => {
  //   console.log("ui re-rendered");
  // });

  //variation 2 -> 1st render
  // useEffect(() =>{
  //   console.log("1st render");
  // },[]);

   //variation 3 -> 1st render + whenever dependency changes
  // useEffect(() =>{
  //   console.log("render");
  // },[name]);

   //variation 4 -> to handle unmounting of component
  useEffect(() =>{
    console.log("component mounted");

    return() => {
      console.log("component unmounted");
    }
  },[text]);


  function changeHandler(e){
    setText(e.target.value);
    console.log(text);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}/>
    </div>
  )
}

export default App
