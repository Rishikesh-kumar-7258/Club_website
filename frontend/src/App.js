import { Routes, Route } from "react-router-dom";
import Home from "./components/homepage";
import Authorize from "./components/authorize";
import "./App.css";
import React from "react";
import User from "./components/singleUser";

export const GlobalContext = React.createContext(null);

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState(null);
  return (
    <GlobalContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, user, setUser }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authorize" element={<Authorize />} />
        <Route path="/users/:id" element={<User/>}/>
      </Routes>
    </GlobalContext.Provider>
  );
}

export default App;
