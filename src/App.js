import { createContext, useState } from "react";
import "./App.css";
import Button from "./component/Button";
import Display from "./component/Display";
export const MyContext = createContext();
function App() {
  const[num1, setNum1] = useState("")
  const[ans,setAns] = useState("0")
  function Concate(num){
    setNum1(num1+num.arg)
    // console.log(num1)
    setAns("")
}
function clear(){
  setNum1('')
  setAns("")
}
function setOperator(operator){
  // console.log(operator)
  // setNum1(ans.value)
  setNum1(num1+operator.arg)
  setAns("")
}
function result(){
  // setNum1(num1+equal.name)
  setAns(eval(num1));
  setNum1(eval(num1))
}

  
  return (
    <>
      <div className="App">
      <MyContext.Provider
        value={{num1 : num1 , setNum1 : setNum1 ,ans:ans, setAns:setAns}}
      >
        <div className="top">
          <div className="up">
            <Display />
          </div>
          <div className="down">
            <Button width="10rem" height="4.5rem" name="AC" bgcolor="#ac3939" onclick={clear}/>
            <Button width="5rem" height="4.5rem" name="/" bgcolor="#666666" onclick={setOperator} arg="/"/>
            <Button width="5rem" height="4.5rem" name="X" bgcolor="#666666" onclick={setOperator} arg="*"/>
          </div>
        </div>
        <div className="middle">
          <div className="up">
            <Button width="5rem" height="4.5rem" name="7" bgcolor="#4d4d4d" onclick={Concate} arg="7"/>
            <Button width="5rem" height="4.5rem" name="8" bgcolor="#4d4d4d" onclick={Concate} arg="8"/>
            <Button width="5rem" height="4.5rem" name="9" bgcolor="#4d4d4d" onclick={Concate} arg="9"/>
            <Button width="5rem" height="4.5rem" name="-" bgcolor="#666666" onclick={setOperator} arg="-"/>
          </div>
          <div className="down">
            <Button width="5rem" height="4.5rem" name="4" bgcolor="#4d4d4d" onclick={Concate} arg="4"/>
            <Button width="5rem" height="4.5rem" name="5" bgcolor="#4d4d4d" onclick={Concate} arg="5"/>
            <Button width="5rem" height="4.5rem" name="6" bgcolor="#4d4d4d" onclick={Concate} arg="6"/>
            <Button width="5rem" height="4.5rem" name="+" bgcolor="#666666" onclick={setOperator} arg="+"/>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="up">
              <Button width="5rem" height="4.5rem" name="1" bgcolor="#4d4d4d" onclick={Concate} arg="1"/>
              <Button width="5rem" height="4.5rem" name="2" bgcolor="#4d4d4d" onclick={Concate} arg="2"/>
              <Button width="5rem" height="4.5rem" name="3" bgcolor="#4d4d4d" onclick={Concate} arg="3"/>
            </div>
            <div className="down">
              <Button width="10rem" height="4.5rem" name="0" bgcolor="#4d4d4d" onclick={Concate} arg="0"/>
              <Button width="5rem" height="4.5rem" name="." bgcolor="#4d4d4d" onclick={Concate} arg="."/>
            </div>
          </div>
          <div className="right">
            <Button width="5rem" height="9rem" name="=" bgcolor="#004466" onclick={result}/>
          </div>
        </div>
        </MyContext.Provider>
      </div>
      
     
    </>
  );
}

export default App;