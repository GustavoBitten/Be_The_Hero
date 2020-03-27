import React,{useState} from 'react';

import Header from './Header';



function App() {
  const [count, setCounter] = useState(0)
  console.log(useState(3))

  function increment(){
    setCounter((count**2)+1)

    //console.log(setCounter)

    console.log("test")

    //console.log(setCounter(count + 1))

    console.log(count)
  }
 
  return (
    <div>
      <Header > Números: {count}</Header>
      <button onClick={increment}>incrementar</button>
    </div>

  );
}

export default App;
