// App.jsx
import React from "react";
import CustomCursor from "./components/CustomCursor";
import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/NavBar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Project from "./sections/Project";
import Skills from "./sections/Skills";

export default function App() {

  const [introDone ,setIntroDone] = React.useState(false);
  return (

    <>
    {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)}/>}
    
{ introDone && ( 
    <div className="relative gradient text-white">
     {/* <ParticleBackground />*/}
      <CustomCursor/>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Experience />
      {/*/<Testimonials />*/}
      <Contact />
      <Footer />
    </div>
    )}
        </>
  );
}
