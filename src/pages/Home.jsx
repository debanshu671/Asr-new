import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Ourworkcard from "../Components/Ourworkcard";
import Intership from "../Components/Intership";
import Ourstory from "../Components/Ourstory";
import Footer from "../Components/Footer";
import Countup from "../Components/Countup";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Intership />
      <Ourstory />
      <Countup />
      <Footer />

      <div className="flex gap-7">
        <Ourworkcard
          Cardtitel="diamas"
          Cardpara="lorelipsomhdhdhdhdhdhdhdhdhdhdhhhdhhhhddhhdhdd"
          Cardimg="https://unsplash.com/photos/woman-in-white-long-sleeve-shirt-holding-white-printer-paper-rb8hr3cXD4A"
        />
        <Ourworkcard
          Cardtitel="Tiiamas"
          Cardpara="hhhhrelipsomhgfgfdhdhdhdhdhdhdhdhdhdhhhdhhhhddhhdhdd"
          Cardimg="https://unsplash.com/photos/woman-in-white-long-sleeve-shirt-holding-white-printer-paper-rb8hr3cXD4A"
        />
        <Ourworkcard
          Cardtitel="Paglamas"
          Cardpara="kkkelipsomhdhdhdhdhdhdhdhdhdhdhhhdhhhhddhhdhdd"
          Cardimg="https://unsplash.com/photos/woman-in-white-long-sleeve-shirt-holding-white-printer-paper-rb8hr3cXD4A"
        />
      </div>
    </div>
  );
};

export default Home;
