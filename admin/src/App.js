
import './App.css';
import RoutesComp from './routes/index.js';

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

          <RoutesComp />
         
    </BrowserRouter>
  );
}

export default App;
