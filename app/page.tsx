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
    <>
      <Header />
      <LeftSide />
      <RightSide />

      <main className="mx-auto w-full max-w-5xl px-6 sm:px-10">
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
      </main>

      <MobileTabs />
    </>
  );
}
