import React, { useState } from 'react';
import Video from '../../video/video.mp4';
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
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'>

                </VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1> Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and recieve $250 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Get started { hover ? <ArrowForward/> : <ArrowForwardTransition />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default Hero
