import React from 'react';
import styled from 'styled-components';
import resume from '../../imgs/avatar.JPG';
import PrimaryButton from '../buttoncomponent/PrimaryButton';

const ImageComponent = props => {
    return (
        <ImageStyled>
        <div className="left-content">
            <img src={resume} alt=""/>
        </div>
        <div className="right-content">
            <h4>I am <span>Suraj</span></h4>
            <p className="paragraph">
               I am a full stack developer with over 5 years of experience in various technologies like Java, Spring Boot, Micro services.
                
            </p>
            <div className="about-info">
                <div className="info-title">
                    <p>Full Name</p>
                    <p>Age</p>
                    <p>Nationality</p>
                  
                    <p>Location</p>
                    <p>Service</p>
                </div>
                <div className="info">
                    <p>:  Nair Suraj Gangadharan</p>
                    <p>:  28</p>
                    <p>:  Indian </p>
                
                    <p>:  Chennai, India</p>
                    <p>:  Full Stack Developer @ Barclays PLC</p>
                </div>
            </div>
            <PrimaryButton title={'Download Resume'} />
        </div>
    </ImageStyled>
    );
};

const ImageStyled = styled.div`
    padding-top: 2rem;
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        margin-right: 5rem;
        align-items: left;
        height:70vh;
        img{
            width: 100%;
            object-fit: cover;
            height: 100%
        }
    }
    .right-content{
        width: 100%;
        padding-bottom: 2rem;
        
        h4{
            font-size: 2rem;
            text-align : left;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
            text-align : left;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            text-align : left;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
      
    }
   
`;

export default ImageComponent;