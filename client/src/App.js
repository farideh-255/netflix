import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Login from './pages/login/Login'

import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Navigate,
  Switch
} from 'react-router-dom'

import Register from './pages/register/Register';



function App() {
  const user=true;

  return (
    <div className="App">
          <BrowserRouter>
              <Routes> 
                        <Route exact path="/"   element={user? <Home /> : <Register /> } />
                        <Route path="/movies"   element={ user? <Home type="movies" /> : <Register />} />
                        <Route path="/series"   element={user? <Home type="series" /> : <Register />} />
                        <Route path="/watch/:id"  element={user? <Watch /> : <Register />} />   
                        <Route path="/register"  element={ !user ? <Register /> : <Login /> } />
                       {/*  <Route path="/register">
                          {!user ? <Register /> : <Login />}
                        </Route>
                        */} 
               </Routes>

          </BrowserRouter>
    </div>
  );
}

export default App;
