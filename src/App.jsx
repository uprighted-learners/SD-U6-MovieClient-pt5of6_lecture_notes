import { useState, useEffect } from 'react';
import Auth from './components/auth/Auth'
import {Routes, Route} from 'react-router-dom';
import MovieIndex from './components/movie/MovieIndex';

function App() {

  const [ sessionToken, setSessionToken ] = useState('');

  const updateToken = newToken => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken)
  }

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  },[])

  return (
    <div className="App">
      <Routes>
        <Route 
          path="/" 
          element={<Auth updateToken={updateToken} />} 
          />
        <Route
          path="/movie"
          element={<MovieIndex token={sessionToken} />}
          />
      </Routes>
    </div>
  );
}

export default App