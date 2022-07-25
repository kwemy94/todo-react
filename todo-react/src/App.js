import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRouter from "./AppRouter";
import { useEffect, useState } from "react"
import { Provider } from 'react-redux';
import store from './store'

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
        <Provider 
        store={store}>
          <AppRouter />
        </Provider>
      </Router>
    </>
  );
}

export default App;
