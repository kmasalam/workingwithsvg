import logo from './logo.svg';
import './App.css';
import sprite from './sprites.svg';
import { ReactSVG } from 'react-svg'
import icon1 from './assets/c1_1.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <svg className='mysvg' style={{
          fill: '#985'
        }}>
          <use href={sprite + '#mountain-1'}  />
        </svg> */}
        <ReactSVG
          beforeInjection={(svg) => {
            svg.classList.add('svg-class-name')
            const [firstGElement] = [...svg.querySelectorAll('path')]
            firstGElement.setAttribute('fill', 'blue')
          }}
          src={icon1}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
