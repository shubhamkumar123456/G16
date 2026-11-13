
import './App.css'
import Home from './Home';
import About from './About';
import { useState } from 'react';

function App() {

  const [value, setvalue] = useState(10);
  console.log(value);

  return (
    <div>
           <h1>This is App component , Count = {value}</h1>
            <button onClick={()=>setvalue(value + 1)}>Increment</button>
           <Home x={value}/>
           <About/>
           
    </div>
  )
}

export default App
