import "./App.css";
import { faHouse, faInbox } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/header";
import Functions from "./components/functions";
import Main from "./components/main";
import MainDetail from "./components/maindetail";
import Detail from "./components/detail";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Header />
      <Functions />
      <Main />
      <MainDetail />
      <Detail />
      <Navbar />
    </>
  );
}

export default App;
