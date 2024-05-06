import {
  useState,
  useRef
} from "react"; 
import "./../App.css";
import createOperationHandler from "../helpers/createOperationHandler";

function Calculator() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 

  function operationHandler(operation) {
    return function (e) {
      e.preventDefault();
      const computedResult = createOperationHandler(operation)(result, inputRef.current.value);
      setResult(computedResult);
      resultRef.current.textContent = computedResult;
    };
  }
  
  const plus = e => operationHandler('+')(e);
  const minus = e => operationHandler('-')(e);
  const times = e => operationHandler('*')(e);
  const divide = e => operationHandler('/')(e);
  
  const resetInput = e => { 
    e.preventDefault(); 
    inputRef.current.value = "";
  }; 
 
  const resetResult = e => { 
    e.preventDefault(); 
  	setResult(0); 
  }; 
  
  return ( 
    <form> 
      <p ref={resultRef} aria-label="calculator-output">{result}</p> 
      <input pattern="[0-9]" ref={inputRef} type="number" aria-label="calculator-input" placeholder="Type a number" /> 
      <button onClick={plus}>add</button>
      <button onClick={minus}>subtract</button> 
      <button onClick={times}>multiply</button>
      <button onClick={divide}>divide</button>
      <button onClick={resetInput}>resetInput</button>
      <button onClick={resetResult}>resetResult</button>
  </form> 
  ); 
} 
 
export default Calculator; 
