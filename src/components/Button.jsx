import { useState } from "react"
function Button() {
  const [count, setCount] = useState(0)
  function increment(){
     setCount(count +1)
  }
  function reset(){
    setCount(0)
  }
  function decrease(){
    setCount(count -1)
 }
  
  return(
    <div>
      <div className="number">{count}</div>
          <div className="button">
       <button className="buttonone" onClick={increment}> Увеличить </button>
       <button className="buttonfirst" onClick ={decrease} >  Уменьшить </button>
       <button className="buttonsecond" onClick={reset} > Сбросить </button>
    </div>
    </div>
  )
}
export default Button