import "../src/styles/app.css";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import Overview from "./Overview.jsx";
import Dataset from "./Dataset.jsx";
import Footer from "./Footer.jsx";
import { useRef } from "react";
import AboutUs from "./AboutUs.jsx";
import Methodology from "./Methodology.jsx";
import Conclusion from "./Conclusion.jsx"; 


function App() {
  const dataSetsRef = useRef(null);
  const overviewRef = useRef(null);  
  const aboutUsRef = useRef(null);
  const methodRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Nav
        onScrollToDatasets={()=>scrollToSection(dataSetsRef)}
        onScrollToOverview={()=>scrollToSection(overviewRef)} // passes the pointer to a function that anon calls scroll to convert the current reference to 
        onScrollToAboutUs={()=>scrollToSection(aboutUsRef)}
        onScrollToMethod={()=>scrollToSection(methodRef)}

/>
      <Hero />
      <Overview overviewRef={overviewRef} />
      <Dataset dataSetsRef={dataSetsRef} />
      <Methodology methodRef={methodRef} />
      <Conclusion />
      <AboutUs aboutUsRef={aboutUsRef}/>
      <Footer />
    </>
  );
}

export default App;
