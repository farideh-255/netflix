import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';

import {
  BrowserRouter,
  Route,
  Routes,
  Switch
} from 'react-router-dom'
import Register from './pages/register/Register';



function App() {
  return (
    <div className="App">
          <BrowserRouter>
              <Routes> 
                        <Route exact path="/"   element={<Home />} />
                        <Route path="/watch"  element={ <Watch /> } />   
                        <Route path="/login"  element={ <Register /> } />   
               </Routes>

          </BrowserRouter>
    </div>
  );
}

export default App;
