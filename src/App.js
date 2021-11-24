import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import AboutMe from "./components/About";
import RightSide from "./components/Right-side";
import LeftSide from "./components/Left-side";

function App() {
  return (
    <div className="body-bg bg-primary-color" style={{ height: "100vh" }}>
      {/* <Router> */}
      <Header />
      <div className="grid md:grid-cols-12">
        <div>
          <RightSide />
        </div>
        <div
          className="md:col-span-10 px-10 overflow-y-auto"
          style={{ height: "85vh" }}
        >
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <AboutMe />
          </div>
        </div>
        <div>
          <LeftSide />
        </div>
      </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
