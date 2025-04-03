import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import InfoCards from "./components/InfoCards/InfoCard";
import Classes from "./components/Classes/Classes";
import BMI from "./components/BMI/BMI";
import Trainers from "./components/Trainers/Trainers";
import Purchase from "./components/Purchase/Purchase";
import Review from "./components/Review/Review";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Hero />
        <InfoCards />
      </section>
      <Classes />
      <BMI />
      <Trainers />
      <Purchase />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
