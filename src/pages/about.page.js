import styled from 'styled-components';
import React from 'react';
import { MainLayout } from '../global-styles/layout-styles';
import TitleComponent from '../components/title.component/title.component';
import ImageComponent from '../components/imagecomponent/image.component';
import Service from '../components/services/service.component';
import ReviewComponent from '../components/reviewcomponent/review.component';


const AboutPage = props => {
    return (
       
        <MainLayout>
        <AboutStyled >
            <TitleComponent title={'About Me'} span={'About Me'} />
        </AboutStyled>
        <ImageComponent />
        <Service/>
        <ReviewComponent />
    </MainLayout>
        
    );
};

const AboutStyled = styled.section`
  
`;

export default AboutPage;


