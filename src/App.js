import './App.css';
import logo from './img/amLogo.webp';
import Button from './components/Button';
import Visor from './components/Visor';
import ClearButton from './components/Clear-Button';
import { useState } from 'react';

function App() {

  const [inputState, setInput] = useState('');

  const addInput = val => {
    // Concatena el valor con el otro valor del boton pulsado
    setInput(inputState + val);
  }

  return (
    <div className="App">
        <div className='am-logo-container'>
            <img src={logo} className='am-logo' alt='Logo Aston Martin Prostitucion F1 Team'/>
        </div>
        <div className='calculadora-container'>
            <Visor input={inputState}/>
            <div className='operations-container'>
              <Button controlVisor={addInput}>%</Button>
              <Button controlVisor={addInput}>/</Button>
              <ClearButton>Clear</ClearButton>
            </div>
            <div className='operations-container'>
              <Button controlVisor={addInput}>7</Button>
              <Button controlVisor={addInput}>8</Button>
              <Button controlVisor={addInput}>9</Button>
              <Button controlVisor={addInput}>x</Button>
            </div>
            <div className='operations-container'>
              <Button controlVisor={addInput}>4</Button>
              <Button controlVisor={addInput}>5</Button>
              <Button controlVisor={addInput}>6</Button>
              <Button controlVisor={addInput}>-</Button>
            </div>
            <div className='operations-container'>
              <Button controlVisor={addInput}>1</Button>
              <Button controlVisor={addInput}>2</Button>
              <Button controlVisor={addInput}>3</Button>
              <Button controlVisor={addInput}>+</Button>
            </div>
            <div className='operations-container'>
              <Button controlVisor={addInput}>0</Button>
              <Button controlVisor={addInput}>.</Button>
              <Button controlVisor={addInput}>=</Button>
            </div>
        </div>
    </div>
  );
}

export default App;
