import React from "react";

import { Routes, Route } from 'react-router-dom';
import { Login, Register, Profile} from "./components";

const AppRouter = () => {


    return (
      <>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </>
    );
}
export default AppRouter;