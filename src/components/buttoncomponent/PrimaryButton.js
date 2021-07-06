import React from 'react'
import styled from 'styled-components';
import ExampleDoc from '../../data/resume_file.pdf'

function PrimaryButton({title}) {
    return (
        <PrimaryButtonStyled href={ExampleDoc} download="resume_nair_suraj_gangadharan" target='_blank'>
            {title}
        </PrimaryButtonStyled>
        
    )
}

const PrimaryButtonStyled = styled.a`
    background-color: var(--primary-color);
    padding: .7rem 3rem;
    color: white;
    cursor: pointer;
    width: 50%;
    height: 9.5vh;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
  
    display: flex;
   
    text-align: left;
    align-content: left;
    
   
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: .2rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: .7;
    }
    &:hover::after{
        width: 100%;
        background-color: var(--white-color);
    }
`;
export default PrimaryButton;