import {useState} from "react";
import * as math from "mathjs";
import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addtoText = (val => {
    setText((text) => [...text, val +" "]);
  });

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const calculateResult = () => {
    const input = text.join("")
    setResult(math.evaluate(input))
  };

  const buttonColor = "#f2a33c";
  return (
    <div className="App">
        <div className="calc-wrapper">
        <Input text={text} result={result} />
          <div className="row">
            <Button symbol="7" handleClick={addtoText}/>
            <Button symbol="8" handleClick={addtoText}/>
            <Button symbol="9" handleClick={addtoText}/>
            <Button symbol="/" color={buttonColor} handleClick={addtoText} />
          </div>
          <div className="row">
            <Button symbol="4" handleClick={addtoText}/>
            <Button symbol="5" handleClick={addtoText}/>
            <Button symbol="6" handleClick={addtoText}/>
            <Button symbol="*" color={buttonColor} handleClick={addtoText}/>
          </div>
          <div className="row">
            <Button symbol="1" handleClick={addtoText}/>
            <Button symbol="2" handleClick={addtoText}/>
            <Button symbol="3" handleClick={addtoText}/>
            <Button symbol="+" color={buttonColor} handleClick={addtoText}/>
          </div>
          <div className="row">
            <Button symbol="0" handleClick={addtoText}/>
            <Button symbol="." handleClick={addtoText}/>
            <Button symbol="=" handleClick={calculateResult}/>
            <Button symbol="-" color={buttonColor} handleClick={addtoText}/>
          </div>
          <Button symbol="Clear" color="red" handleClick={resetInput}/>
        </div>
    </div>
  );
}

export default App;
