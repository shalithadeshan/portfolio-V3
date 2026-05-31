import Header from "@/components/Header";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import Home from "@/components/Home";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileTabs from "@/components/MobileTabs";

export default function Page() {
  return (
    <div className="bg-primary-color">
      <div className="invisible md:visible">
        <Header />
      </div>
      <div className="grid md:grid-cols-12">
        <div className="invisible md:visible">
          <LeftSide />
        </div>
        <div className="md:col-span-10 px-10 overflow-y-auto bg-primary-color">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="work">
            <Work />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </div>
        <div className="invisible md:visible">
          <RightSide />
        </div>
      </div>
      <div className="flex flex-wrap content-end">
        <div className="visible md:invisible fixed inset-x-0 bottom-0 w-full z-50">
          <MobileTabs />
        </div>
      </div>
    </div>
  );
}
