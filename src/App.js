import './App.css';
import logo from './img/amLogo.webp';
import Button from './components/Button';
import Visor from './components/Visor';
import ClearButton from './components/Clear-Button';

function App() {
  return (
    <div className="App">
        <div className='am-logo-container'>
            <img src={logo} className='am-logo' alt='Logo Aston Martin Prostitucion F1 Team'/>
        </div>
        <div className='calculadora-container'>
            <Visor />
            <div className='operations-container'>
              <Button child='/'/>
              <Button child='%'/>
              <ClearButton child='CLEAR'/>
            </div>
            <div className='operations-container'>
              <Button child='7'/>
              <Button child='8'/>
              <Button child='9'/>
              <Button child='x'/>
            </div>
            <div className='operations-container'>
              <Button child='4'/>
              <Button child='5'/>
              <Button child='6'/>
              <Button child='-'/>
            </div>
            <div className='operations-container'>
              <Button child='1'/>
              <Button child='2'/>
              <Button child='3'/>
              <Button child='+'/>
            </div>
            <div className='operations-container'>
              <Button child='0'/>
              <Button child='.'/>
              <Button child='='/>
            </div>
        </div>
    </div>
  );
}

export default App;
