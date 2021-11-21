import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {FaFacebookSquare, FaYoutubeSquare, FaTwitterSquare, FaLinkedin} from 'react-icons/fa';
import {ImInstagram} from 'react-icons/im'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink} from './FooterElements';
import { SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin" >How it works</FooterLink>
                                <FooterLink to="/signin" >Testimonials</FooterLink>
                                <FooterLink to="/signin" >Careers</FooterLink>
                                <FooterLink to="/signin" >Investors</FooterLink>
                                <FooterLink to="/signin" >Terms of Service</FooterLink>                        
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/signin" >Contact</FooterLink>
                                <FooterLink to="/signin" >Support</FooterLink>
                                <FooterLink to="/signin" >Destinations</FooterLink>
                                <FooterLink to="/signin" >Sponserships</FooterLink>                       
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to="/signin" >Submit Video</FooterLink>
                                <FooterLink to="/signin" >Ambassadors</FooterLink>
                                <FooterLink to="/signin" >Agency</FooterLink>
                                <FooterLink to="/signin" >Influencer</FooterLink>                        
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/signin" ><ImInstagram/> Instagram</FooterLink>
                                <FooterLink to="/signin" ><FaFacebookSquare/> Facebook</FooterLink>
                                <FooterLink to="/signin" ><FaYoutubeSquare/> Youtbe</FooterLink>
                                <FooterLink to="//www.twitter.com/username" ><FaTwitterSquare /> Twitter</FooterLink> 
                                <FooterLink to="//www.linkedin.com/username" ><FaLinkedin /> LinkedIn</FooterLink>                       
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Logo
                        </SocialLogo>
                        <WebsiteRights>Logo &copy; {new Date().getFullYear()} ALL rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank" aria-label="Instagram"><ImInstagram/></SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Facebook"><FaFacebookSquare/></SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Youtube"><FaYoutubeSquare/></SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Twitter"><FaTwitterSquare /></SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
