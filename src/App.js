import './App.css';
import logo from './img/amLogo.webp';
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <div className='am-logo-container'>
        <img src={logo} className='am-logo' alt='Logo Aston Martin Prostitucion F1 Team'/>
      </div>
      <div className='calculadora-container'>
        <div className='visor-container'>d</div>
        <div className='operations-container'>
          <Button child='1'/>
          <Button child='+'/>
        </div>
        <div className='operations-container'></div>
        <div className='operations-container'></div>
        <div className='operations-container'></div>
        <div className='operations-container'></div>
      </div>
    </div>
  );
}

export default App;
