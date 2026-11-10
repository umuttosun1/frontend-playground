import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Toolbar } from "@mui/material";
import RouterConfig from "./config/RouterConfig";

function App() {
  return (
    <>
      <Header />
      <Toolbar />
      <RouterConfig />
    </>
  );
}

export default App;
