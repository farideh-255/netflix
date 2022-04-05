
import './App.css';
import RoutesComp from './routes/index.js';
import {AuthContext, AuthContextProvider} from './context/authcontext/authContext';
import {useContext} from 'react'
import {MovieContext, MovieContextProvider} from './context/movieContext/MovieContext'

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
      <MovieContextProvider>
        <BrowserRouter>

              <RoutesComp />
            
        </BrowserRouter>
       </MovieContextProvider>
    </AuthContextProvider>
  );
}

export default App;
