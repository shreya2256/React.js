import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 15;
  let [counter, setCounter] = useState(15) //here pass conter value to the useState hook
  const addValue = () => {
    //console.log("Clicked", counter);
    //counter = counter +1;
    setCounter(counter + 1)
    //React interview question: if interview adds setCounter 4 times and asked output
    //to answer this question , firstly we have to tell them that
    //in React js data is passes in bundlers, not single unit so , if we clicked on addValue button 
    //our value simply updated by once
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    //to update value and to all changes once
    //we have to write as below way as to change it as sing;ly task
    /*
    setCounter(prevcounter => prevcounter+1)
    setCounter(prevcounter => prevcounter+1)
    setCounter(prevcounter => prevcounter+1)
    setCounter(prevcounter => prevcounter+1) */


  }
  const removeValue = () =>{
    setCounter(counter-1)
  }
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value : {counter}</h2>
    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >Remove value {counter}</button>
    <p>Footer{counter}</p>
    </>
  )
}

export default App
