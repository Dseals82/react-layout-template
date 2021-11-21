import Navbar from '../components/Navbar';
import DropDownMenu  from '../components/DropDownMenu';
import React, { useState } from 'react';
import Hero from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <DropDownMenu isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle} />  
          <Hero />
          <InfoSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo}/>
          <Services />
          <InfoSection {...homeObjThree}/>
          <Footer />
        </>
    )
}

export default Home
