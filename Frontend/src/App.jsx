import React from "react";
import First from "./components/First";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import SignInForm from "./components/SignIn";
import Data from "./components/Data";
import Home from "./components/Home"; // Corrected import

function App() {
  return (
    <>
      <div></div>
      <div>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/signup" element={<Form />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/data" element={<Data />} />
          <Route path="/home" element={<Home />} />
          <Route path="/logout" element={<First />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
