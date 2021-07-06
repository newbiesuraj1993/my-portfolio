import React from 'react';
import styled from 'styled-components';
import LinearDeterminate from '../components/progressbars/CustomizedProgressBars';
import TitleComponent from '../components/title.component/title.component';
import { MainLayout, InnerLayout } from '../global-styles/layout-styles';
import CustomizedTimeline from '../components/timeline/timeline.component';
import CustomizedTimelineHorizontal from '../components/timeline/horizontal.timeline.component';
import SmallTitleComponent from '../components/title.component/SmallTitle';



const ResumePage = props => {
    return (
        <ResumeStyled>
            <MainLayout>
                <TitleComponent title={'Resume'} span={'Resume'} />
                <InnerLayout>
                    <ProgressStyle>
                        <div>
                            <h5>Spring Boot/Java/MicroServices<span>8/10</span></h5>
                            <LinearDeterminate width={80} />
                        </div>

                        <div>
                            <h5>Machine Learning/AI-Python <span>8/10</span></h5>
                            <LinearDeterminate width={80} />
                        </div>

                        <div>
                            <h5>React - Front End Technology &nbsp;<span>6/10</span></h5>
                            <LinearDeterminate width={60} />
                        </div>

                        <div>
                            <h5>Cloud Technology & DevOps<span>7/10</span></h5>
                            <LinearDeterminate width={70} />
                        </div>
                    </ProgressStyle>
                    <SmallTitleComponent title={'Experienced As :'} span={'Experienced As :'}/>
                    <div className='timelined-styles'>
                  
                        <CustomizedTimeline />
                        
                    </div>
                    <SmallTitleComponent title={'Academics :'} span={'Academics :'}/>
                    <div className='timelined-styles-horizontal'>
                    
      
                    <CustomizedTimelineHorizontal />
                    
                </div>
                </InnerLayout>
            </MainLayout>

        </ResumeStyled>
    );
};

const ResumeStyled = styled.div`
    width: 100%;
    .timelined-styles {
        margin-top: 8rem;
    }.timelined-styles-horizontal{
        margin-top: 8rem;
    }
`;

const ProgressStyle = styled.div`
   
    margin-top: 5rem;
   
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (max-width: 770px){
            grid-template-columns: repeat(1, 1fr);
            grid-column-gap: 1rem;
            grid-row-gap: 1.5rem;
        }
    span{
        font-size: 1rem;
        margin-left: 6rem;
        @media screen and (max-width: 770px){
            font-size: 0.5rem;
            margin-left: 3rem;
        }
    }
   

`;

export default ResumePage;