import React from 'react';
import { DropDownMenuContainer, Icon, CloseIcon,DropDownMenuWrapper, DropDownMenuLink, DropDownMenuBtnWrap, DropDownMenuRoute, DropDownMenuList} from './DropDownMenuElements';

const DropDown = ({isOpen, toggle}) => {
    return (
        <DropDownMenuContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />   
            </Icon> 
            <DropDownMenuWrapper>
                <DropDownMenuList>
                    <DropDownMenuLink to='about' onClick={toggle}>
                        About
                    </DropDownMenuLink>
                    <DropDownMenuLink to='discover' onClick={toggle}>
                        Discover
                    </DropDownMenuLink>
                    <DropDownMenuLink to='services' onClick={toggle}>
                        Services
                    </DropDownMenuLink>
                    <DropDownMenuLink to='signup' onClick={toggle}>
                        Sign Up
                    </DropDownMenuLink>
                </DropDownMenuList>
                <DropDownMenuBtnWrap>
                    <DropDownMenuRoute to='/signin'>
                        Sign In
                    </DropDownMenuRoute>
                </DropDownMenuBtnWrap>
            </DropDownMenuWrapper>
        </DropDownMenuContainer>
    )
}

export default DropDown;
