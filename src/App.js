import "./App.css";
import "antd/dist/antd.css";
import Home from "./components/Home";
import Header from "./components/Header";
import AboutMe from "./components/About";
import RightSide from "./components/Right-side";
import LeftSide from "./components/Left-side";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import MobileTabs from "./components/Tabs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="body-bg bg-primary-color ">
      <div className="invisible md:visible">
        <Header />
      </div>
      <div className="grid md:grid-cols-12">
        <div className="invisible md:visible">
          <LeftSide />
        </div>
        <div className="md:col-span-10 px-10 overflow-y-auto bg-primary-color">
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <AboutMe />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="work">
            <Work />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <div>
            <Footer />
          </div>
        </div>
        <div className="invisible md:visible">
          <RightSide />
        </div>
      </div>
      <div className="flex flex-wrap content-end ">
        <div className="visible md:invisible fixed inset-x-0 bottom-0 w-full z-50">
          <MobileTabs />
        </div>
      </div>
    </div>
  );
}

export default App;
