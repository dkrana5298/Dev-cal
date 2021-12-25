import { useState } from 'react';
import './App.css';
import Button from './component/button';
import Input from './component/input';
import * as math from 'mathjs';
const App = ()=> {

  const [text,setText]=useState("");
  const [result,setResult]=useState("");
  
  const addToText =(val)=>{
    setText((text) =>[...text,val +""]);
  }

  const resetInput = () =>{
    setText("");
    setResult("");
  }
  const calculateResult = () =>{
   const input=text.join("");
   setResult((math.evaluate(input)).toFixed(2));
  }

  const backslace = () => {
    setText(text.slice(0, -1));
  }

  return (
    
    <div className="App">
      
      <div className="calc-wrapper">
        <Input text={text} result={result}/>

        <div className="row">
          <Button symbol="AC" hadleClick={resetInput} color="#e0e0e0"/>
          <Button symbol="+/-" hadleClick={backslace} color="#e0e0e0"/>
          <Button symbol="%" hadleClick={addToText} color="#e0e0e0"/>
          <Button symbol="/" hadleClick={addToText} color="#f5923e"/>
        </div>
        <div className="row">
          <Button symbol="7" hadleClick={addToText} color="#e0e0e0"/>
          <Button symbol="8" hadleClick={addToText} color="#e0e0e0"/>
          <Button symbol="9" hadleClick={addToText} color="#e0e0e0"/>
          <Button symbol="*" hadleClick={addToText} color="#f5923e"/>
        </div>
        <div className="row">
          <Button symbol="4" hadleClick={addToText} color="#e0e0e0"/>
          <Button symbol="5" hadleClick={addToText} color="#e0e0e0"/>
          <Button symbol="6" hadleClick={addToText} color="#e0e0e0"/>
          <Button symbol="-" hadleClick={addToText} color="#f5923e"/>
        </div>
        <div className="row">
          <Button symbol="1" hadleClick={addToText} color="#e0e0e0"/>
          <Button symbol="2" hadleClick={addToText} color="#e0e0e0"/>
          <Button symbol="3" hadleClick={addToText} color="#e0e0e0"/>
          <Button symbol="+" hadleClick={addToText} color="#f5923e"/>
        </div>
        <div className="row">
          <Button  symbol="0" hadleClick={addToText} color="#e0e0e0"/>
          <Button  symbol="00" hadleClick={addToText} color="#e0e0e0"/>
          <Button symbol="." hadleClick={addToText} color="#e0e0e0"/>
          <Button symbol="=" hadleClick={calculateResult} color="#f5923e"/>
          
        </div>
        
      </div>
    </div>
  );
}

export default App;
