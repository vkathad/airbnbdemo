import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { Layouts } from "./Pages/Layouts";

import AlertComponent from "./components/ExtraComponent/AlertComponent";
import AccordionCom from "./components/ExtraComponent/AccordionCom";

import CarousalCom from "./components/CarousalCom";
import ModalCom from "./components/ModalCom";
import GridCom from "./components/GridCom";
import { Extra } from "./Pages/Extra";
import Headers from "./components/Layouts/Header";
import DemoCarouselNew from "./components/Layouts/DemoCarouselNew";
import HeaderTab from "./components/Layouts/HeaderTab";
import LoginForm from "./components/LoginForm";
import { useDispatch } from "react-redux";
import { modalActions } from "./store/modal";

function App() {
  const dispatch = useDispatch();
  // <LandingPage></LandingPage>
  return (
    <>
      {/* <Extra></Extra> */}
      <div
        className="container  mx-auto px-20 py-4   "
        onClick={() => {
          dispatch(modalActions.hideHeader());
          console.log("app.js file call dispatch");
        }}
      >
        <Headers></Headers>
        <GridCom></GridCom>
      </div>
    </>
  );
}

export default App;
