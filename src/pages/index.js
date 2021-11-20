import Navbar from '../components/Navbar';
import DropDownMenu  from '../components/DropDownMenu';
import React, { useState } from 'react';
import Hero from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';

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
        </>
    )
}

export default Home
