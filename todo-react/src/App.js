import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRouter from "./AppRouter";
import { useEffect, useState } from "react"

function App() {
  let [user, setUser] = useState({id:'1', name: 'test',username:'test', email: 'email@mail.fr', password: '1234'})

    useEffect(()=>{
        if (!sessionStorage.getItem('user')) {
            sessionStorage.setItem('user', JSON.stringify(user))
        }
    }, [])

  return (
    <>
      <Router>
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
