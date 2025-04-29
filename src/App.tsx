
import './App.css'
import PercentView from './components/PercentView'



const App = () => {
  let cislo: number = 33;
  return(
    <>
      <PercentView vlaue={cislo} max={100} makeColor={(p)=> "red"}/>
    </>

  )
}
export default App