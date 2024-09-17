import './App.css';
import { useState } from 'react';

function App() {
  const[count,setcount]=useState(0);

  function increasehandler(){
    setcount(count+1);  
  }

  function decreasehandler(){
    setcount(count-1);
  }

  function resethandler(){
    setcount(0);
  }


  return (
    // top level container
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-slate-500 flex-col gap-10 text-[3rem]'>
      <h1 className='text-blue-400'>Increment and Decrement</h1>
      <div className='flex bg-white text-black w-40 h-20 justify-evenly items-center p-4'>
        <button onClick={increasehandler}><b>+</b></button>
        <hr />
        <div><b>{count}</b></div>
        <hr />
        <button onClick={decreasehandler}><b>-</b></button>
      </div>
      <button onClick={resethandler} className='bg-blue-500 text-white p-3 rounded-md'>Reset</button>
    </div>
  );
}

export default App;

//at first i created a usestate hook with the initial value as 0 of the counter and using {} showed it in the ui,after that created three different handlers for increament,decreament and rest in which rerender occurs and the ui get updated on the new value of count in setfunction of the usestate