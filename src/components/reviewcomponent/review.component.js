import React from 'react';
import styled from 'styled-components';
import TitleComponent from '../title.component/title.component';
import { InnerLayout } from '../../global-styles/layout-styles';
import ReviewItem from './review.item';


const ReviewComponent = props => {
    return (

            <ReviewStyled>
               <TitleComponent title={'Reviews'} span={'Reviews'} />
               <InnerLayout>
               
               <div className="review-item-style">
               <ReviewItem text='Developer who has good understanding on both functional and technical aspects. Business requirements are clearly understood and transalted to technical features and has the insight to go deep before delivering key features.'/>
               <ReviewItem text='Quick Picker . Business requirements are clearly understood and transalted to technical features and has the insight to go deep before delivering key features.'/>
               </div>
               </InnerLayout>
            </ReviewStyled>
 
        
    );
};

const ReviewStyled = styled.section`

.review-item-style{
    margin-top: 3rem;
    text-align: left;
    display: flex;
}


`;

export default ReviewComponent;