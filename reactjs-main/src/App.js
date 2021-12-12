import logo from './logo.svg';
import image_IsFirstImageDifferentFromSecondImage from "./Images/buttons/IsFirstImageDifferentFromSecondImage.png"
import ImageButton from './CustomComponents/ImageButton.js';
import { CompoundButton } from '@fluentui/react/lib/Button';
import { Image, IImageProps } from '@fluentui/react/lib/Image';
import { useParams, useNavigate, Outlet } from "react-router-dom";

import './App.css';
import HomePage from './routes/HomePage';

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
      </header>
      <div className="App-body">
        <Outlet />
      </div>
      
    </div>
  );
}

export default App;
