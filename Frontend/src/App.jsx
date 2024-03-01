import React from "react";
import First from "./components/First";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form"
import SignInForm from "./components/SignIn";
import Data from './components/Data'

function App() {
  return (
    <>
    <div>    
    </div>
    <div>
      <Routes>
        <Route path="/" element={<First />}></Route>
        <Route path="/signup" element={<Form />}></Route>
        <Route path="/signin" element={<SignInForm />}></Route>
        <Route path="/data" element={<Data/>}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
