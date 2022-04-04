
import './App.css';
import RoutesComp from './routes/index.js';
import {AuthContext, AuthContextProvider} from './context/authcontext/authContext';
import {useContext} from 'react'

import {
  BrowserRouter,
  Route,
  Routes,
  Redirect
} from 'react-router-dom';


function App() {

  const {user}=useContext(AuthContext);

  return (
    <AuthContextProvider>
        <BrowserRouter>

              <RoutesComp />
            
        </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
