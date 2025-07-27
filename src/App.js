import { useEffect, useRef } from "react";
import Features from "./Components/Features";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import "./styles/app.css"
import Reviews from "./Components/Reviews";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";

function App() {

  window.addEventListener("DOMContentLoaded", () => {
    const navlinks = document.querySelectorAll(".nav-link");
    navlinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetSection = link.getAttribute("href").substring(1);
        const section = document.getElementById(targetSection);
        if(section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
      })
    })
  });

  const lightRef = useRef(null)
  useEffect(() => {
    const light = lightRef.current;
    window.addEventListener("mousemove", (e) => {
      const { clientX,clientY } = e;
      if(light) {
        light.style.left = `${clientX - 125}px`;
        light.style.top = `${clientY - 125}px`;
      }
    })
  })
  return (
    <>
   <div className="cursor-light" ref={lightRef}></div>
   <Hero />
   <Features />
   <Reviews />
   <Pricing />
   <Footer />
    </>
  );
}

export default App;
