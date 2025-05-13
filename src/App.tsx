
import './App.css'
import PercentView from './components/PercentView'
import { useState } from 'react';


const App = () => {
  const [rangeValue, setRangeValue] = useState(100);
  const initialValue: number = 50;
  return(
    <>
    <div>
      <input type="range" min={0} max={200} onChange={(e) => setRangeValue(parseInt(e.target.value))} defaultValue={initialValue}/>
    </div>
      <PercentView vlaue={rangeValue} max={100} makeColor={(p)=> `hls (${p* 100}, 100%,50%)`}/>
    </>

  )
}
export default App