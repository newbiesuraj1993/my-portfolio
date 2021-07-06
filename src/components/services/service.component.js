import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../global-styles/layout-styles';
import TitleComponent from '../title.component/title.component';
import ServiceCard from './service.card';
import backend from '../../imgs/backend.png';
import frontend from '../../imgs/frontend.png';
import neural from '../../imgs/neural.png';



const Service = props => {
    return (
        <InnerLayout>
        <TitleComponent title={'Projects'} span={'Projects'} />
            <ServicesStyled>
             <div className="services">
                <ServiceCard image={backend} title={'Back End Development'} paragraph={'Back End Integration Projects using Spring Boot'} />
                <ServiceCard image={neural} title={'Machine Learning'} paragraph={'NLP Related Projects for Text Data Classification and Clustering'} />
                <ServiceCard image={frontend} title={'Front End Development'} paragraph={'Front End Self Taught Projects out of interest using ReactJS'} />
             </div>
            </ServicesStyled>
        </InnerLayout>
    );
};


const ServicesStyled = styled.section`
    .services{
        margin-top: 7rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;
export default Service;