import React from "react";

import { Routes, Route } from 'react-router-dom';
import { Login, Register, Profile, Create, Liste} from "./components";

const AppRouter = () => {


    return (
      <>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/create-todo" element={<Create />} />
          <Route path="/liste-todo" element={<Liste />} />
          {/* {sessionStorage.getItem('user')? <Route path="/create-todo" element={<Create />} /> :<Route exact path="/" element={<Login />} />} */}
        </Routes>
      </>
    );
}
export default AppRouter;