import React from 'react';
import { MainLayout, InnerLayout } from '../global-styles/layout-styles';
import TitleComponent from '../components/title.component/title.component';
import portfolios from '../data/portfolios';
import { Grid } from '@material-ui/core'
import PortfolioViewCard from '../components/cardcomponent/card.component';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';


const useStyles = makeStyles((theme) => ({
    gridContainer: {
      
        '@media (max-width:720px)': { // eslint-disable-line no-useless-computed-key
            paddingLeft: '0rem',
            paddingRight: '0rem',
            paddingTop: '0rem',
        }

    }
}));


export default function PortFolioPage() {



    const classes = useStyles();

    return (
        <MainLayout>
            <TitleComponent title={'Portfolios'} span={'Portfolios'} />
            <PortStyled>
            <InnerLayout className='grid-padder'>
            
                <Grid container spacing={4} className={classes.gridContainer}>
                    {
                        portfolios.map((portfolio) => {

                            return <Grid item xs={12} sm={6} md={4}>
                                        <PortfolioViewCard title={portfolio.title} image={portfolio.image} subheader={portfolio.date}
                                            url={portfolio.link1} text={portfolio.text} avatar={portfolio.category} technology={portfolio.technologies} />
                                    </Grid>
                        })
                    }

                </Grid>
                
            </InnerLayout>
            </PortStyled>
        </MainLayout>


    );
};

const PortStyled = styled.div`

    .grid-padder {
        margin-top: 2rem;
    }


`;

