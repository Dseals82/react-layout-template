import React, { useState } from 'react';
import Video from '../../video/blue.mp4';
import VideoSmall from '../../video/blueSmall.mov';
import { Button } from '../ButtonElements';
import { 
    HeroContainer, 
    HeroBg, VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowForwardTransition  } from './HeroElements';

const Hero = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    let getVideoSrc = width => {
        if (width >= 1080) return Video;
        if (width >= 720) return Video;
        return VideoSmall;
      };
      const src = getVideoSrc(window.innerWidth);
    return (
        <HeroContainer id='home'>
            <HeroBg>
                
        
                <VideoBg autoPlay loop muted src={src} type='video/mov'></VideoBg>
                
            </HeroBg>
            <HeroContent>
                <HeroH1> Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and recieve $250 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={500} spy='true' exact='true' offset={-80}>
                        Get started { hover ? <ArrowForward/> : <ArrowForwardTransition />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default Hero
