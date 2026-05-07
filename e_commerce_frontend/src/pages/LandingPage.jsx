import React from 'react'
import CarouselContainer from '../components/CarouselContainer'
import CarouselImage from '../components/CarouselImage';
import DummyProducts from '../components/DummyProducts';
import FooterComponent from '../components/FooterComponent';
import { Products } from './Products';
const LandingPage = () => {
  const handleGreeting=()=>{
      let txt="Welcome to Alpha Mart";
      let wSpeech=window.speechSynthesis;
      let voice= new SpeechSynthesisUtterance(txt);
      wSpeech.speak(voice);
      voice.rate=0.1;
      console.log(wSpeech.getVoices());
    };

    
  return (
    <div>
        <button id="greeting-btn" onClick={handleGreeting}>Greeting</button>
        <CarouselContainer/>
        <h1>Products</h1>
        <DummyProducts/>
        <FooterComponent/>

    </div>
  )
}

export default LandingPage