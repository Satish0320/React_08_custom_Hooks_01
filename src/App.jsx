// import { useState } from 'react'


// function useCounter(){
//   const [count, setCount] = useState(0);
  
//   function increase(){
//     setCount(count + 1);
//   }

//   function decrease(){
//     setCount(count - 1);
//   }

//   return{
//     count: count,
//     increase: increase,
//     decrease: decrease
//   }
// }

// function App() {

//   return (
//     <>
//     <Counter />
//     <Counter />
//     <Counter />
//     <Counter />
//     <Counter />
//     </>
//   )
// }

// function Counter(){

//   const {count, increase, decrease} = useCounter();
  
//   return <div>
//      <button onClick={increase}>increase</button> <br />
//      <button onClick={decrease}>decrease</button> <br />
//      {count}
//   </div>
// }

// export default App





//  USEFETCH Custom Hook

import { useState } from "react"
import { useFetch } from "./hooks/useFetch"

function App() {

  const[currentpost, setcurrentpost] = useState(1);

  const{data} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentpost , 10); 
  return <div>
    <button onClick={()=>{setcurrentpost(1)}}>Posts 1 </button>
    <button onClick={()=>{setcurrentpost(2)}}>posts 2 </button>
    <button onClick={()=>{setcurrentpost(3)}}>posts 3 </button>
    {JSON.stringify(data)}
  </div>
}

export default App
