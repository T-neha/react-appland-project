import Header from "./components/Header";
import Feature from "./components/Feature";
import CompanyImage from "./components/CompanyImage";
import About from "./components/About";
import AboutDetails from "./components/AboutDetails";
import Presentation from './components/Presentation';
import Accordion from './components/Accordion';
import CartDetails from "./components/Cart";
import Pricing from './components/Pricing';
import aboutimage from "./images/about.png";
import AboutDetails1 from "./images/aboutDetails.png";
import aboutimage1 from "./images/people.png";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />

      <CompanyImage />

      <About
        image={aboutimage}
        title="Awesome apps features"
        button="Get The App"
      />
      <Feature />
      <AboutDetails
        image={AboutDetails1}
        title="Designed & built by the latest code integration"
      />
      <CartDetails />
      <Pricing/>
     
      <About
        image={aboutimage1}
        title="Meet Client Satisfaction 
        by using product" 
        button="Download"
      />
      <Accordion/>
      <Presentation/>
      <Contact />
    </div>
  );
}

export default App;
