import { Facebook, GitHub, LinkedIn } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Particle from '../components/particles/particles';
import Typewriter from "typewriter-effect";



const HomePage = (props)=> {

    let color='#FFF';
    console.log(props)
    if(props.theme === 'dark-theme' || props.theme === '' ) {
        color='#007bff';
    } else {
        color='#007bff';
        
    }

   return( <HomePageStyled>
        <div className='p-parts-js'>
            <Particle />
        </div>
    <div className='typography'>
        <h1>I'm <span><b> Nair Suraj Gangadharan</b></span></h1>
          <h3>
        <Typewriter className ='typewriter-js-filler'
  
            onInit={(typewriter)=> {
        
            typewriter
                
            .typeString('I am <span style="color:'+color+'">a Blogger</span>')
                
            .pauseFor(1000)
            .deleteChars('a Blogger'.length)
            .typeString('<span style="color:'+color+'">a Machine Learning Enthusiast</span>')
            .pauseFor(1000)
            .deleteChars(('a Machine Learning Enthusiast').length)
            .typeString('<span style="color:'+color+'"></h3>a Cloud Practitioner</span>')
            .pauseFor(1000)
            .deleteChars(('a Cloud Practitioner').length)
            .typeString('<span style="color:'+color+'"></h3>a Full Stack Developer </span>')
            .start();
       }}
       />
       </h3>
        <div className ='icons'>
            <a href="https://www.facebook.com/gangesuraj" className ='icon i-facebook'><Facebook/></a>
            <a href="https://github.com/newbiesuraj1993" className ='icon i-github'><GitHub/></a>
            <a href="https://www.linkedin.com/in/nair-suraj-gangadharan-19538438/" className ='icon i-linkedin'><LinkedIn/></a>
        </div>
    </div>
    </HomePageStyled>)
    }



const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;

    position: relative;

    /* .p-parts-js {
        position: absolute;
        top: 0;
        left : 0;
    } */

  

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .typewriter-js-filler {
            position: absolute;
            top: 0;
            left : 0;
            text-align: center;
            justify-content: space-between;
            display: inline-flex;
            

        }  

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;

            .icon{
                border : 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                   margin-right: 1rem;
                   //cursor: pointer;
               }

                svg {
                    margin: 0.5rem;
                    
                }

            }
            .i-github {
                &:hover {
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }

            .i-linkedin {
                &:hover {
                    border: 2px solid #0e76a8;
                    color: #0e76a8;
                }
            }
        }

    }

`;

export default HomePage