import logo from './logo.svg';
import { CompoundButton } from '@fluentui/react/lib/Button';
import { Image, IImageProps } from '@fluentui/react/lib/Image';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <CompoundButton secondaryText="Is second image different from first image?" >
          <span><img src={logo} className="App-logo" style={{display:"inline"}}></img></span>
          Man one two
        </CompoundButton> */}
        <Image src={logo} width="40%" alt="Example with no image fit value and no height or width is specified." />
        Is second image different from first image?
      </header>
    </div>
  );
}

export default App;
