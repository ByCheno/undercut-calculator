import './App.css';
import logo from './img/amLogo.webp';
import Button from './components/Button';
import Visor from './components/Visor';
import ClearButton from './components/Clear-Button';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [inputState, setInput] = useState('');

  const addInput = val => {
    // Concatena el valor con el otro valor del boton pulsado
    setInput(inputState + val);
  };

  const calculateOperations = () => {
      if(inputState){
          setInput(evaluate(inputState));
      }else{
          alert('Ingrese valores para poder operar');
      }
  };

  return (
    <div className="App">
        <div className='am-logo-container'>
            <img src={logo} className='am-logo' alt='Logo Aston Martin Prostitucion F1 Team'/>
        </div>
        <div className='calculadora-container'>
            <Visor input={inputState}/>
            <div className='operations-container'>
              <Button onclick={addInput}>%</Button>
              <Button onclick={addInput}>/</Button>
              {/* Defino la funcion en el propio prop del componente puesto que es muy simple */}
              <ClearButton reset={ () => setInput('')}>Clear</ClearButton>
            </div>
            <div className='operations-container'>
              <Button onclick={addInput}>7</Button>
              <Button onclick={addInput}>8</Button>
              <Button onclick={addInput}>9</Button>
              <Button onclick={addInput}>*</Button>
            </div>
            <div className='operations-container'>
              <Button onclick={addInput}>4</Button>
              <Button onclick={addInput}>5</Button>
              <Button onclick={addInput}>6</Button>
              <Button onclick={addInput}>-</Button>
            </div>
            <div className='operations-container'>
              <Button onclick={addInput}>1</Button>
              <Button onclick={addInput}>2</Button>
              <Button onclick={addInput}>3</Button>
              <Button onclick={addInput}>+</Button>
            </div>
            <div className='operations-container'>
              <Button onclick={addInput}>0</Button>
              <Button onclick={addInput}>.</Button>
              <Button onclick={calculateOperations}>=</Button>
            </div>
        </div>
    </div>
  );
}

export default App;
