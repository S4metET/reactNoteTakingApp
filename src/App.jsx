import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import Functions from "./components/functions";
import Main from "./components/main";
import MainDetail from "./components/maindetail";
import Detail from "./components/detail";
import Navbar from "./components/navbar";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <Header />
      <div className="container">
        <Functions />
        <Main />
        <MainDetail />
        <Detail />
        <Navbar />
      </div>
    </>
  );
}

export default App;
