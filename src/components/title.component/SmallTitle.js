import React from 'react';
import styled from 'styled-components';

const SmallTitleComponent = ({title,span}) => {
    return (
        <TitleStyled>
            <h5>{title}<span>{span}</span></h5>
        </TitleStyled>
    );
};



const TitleStyled = styled.div`
    position: absolute;
    margin-top: 4rem;
    margin-bottom: 2rem;
    
    h5{
        color: var(--white-color);
        font-size: 1.8rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .7rem;
        @media screen and (max-width: 496px){
            font-size: 1rem;
        }
        @media screen and (max-width: 370px){
            font-size: 1rem;
        }
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 7.4rem;
            height: .33rem;
            background-color: var(--background-light-color-2);
            border-radius: 15px;
            left: 0;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 3.5rem;
            height: .33rem;
            background-color: var(--primary-color);
            border-radius: 15px;
            left: 0;
        }
        span{
            font-weight: 900;
            color: rgba(25,29,43,.44);
            font-size: 4rem;
            position: absolute;
            left: 0;
            top: 30%;
            z-index: -1;
            @media screen and (max-width: 620px){
                font-size: 3rem;
                span{
                    font-weight:500;
                    font-size: 2rem;
                }
            }
            @media screen and (max-width: 496px){
                font-size: 2rem;
            }
            @media screen and (max-width: 370px){
                font-size: 1rem;
            }
        }
    }
`;

export default SmallTitleComponent;