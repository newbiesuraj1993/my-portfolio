import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
        backgroundColor: '#007bff',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#191D2B'
        }
    },

    paperAlt: {
        padding: '6px 16px',
        backgroundColor: '#FFF',

        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#7dc5ff'
        }
    }

}));

export default function CustomizedTimelineHorizontal() {
    const classes = useStyles();

    return (
        <Timeline align="alternate">
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="#007bff">
                        March,2019 to April,2020
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="body2" align='right' style={{ color: "#FFF", fontFamily: "'Nunito Sans', sans-serif", fontWeight: "bold" }} >
                            Post Graduate Program - Artificial Intelligence and Machine Learning
                        </Typography>
                        <Typography variant='body2' align='right' style={{ color: "#FFF", fontFamily: "'Nunito Sans', sans-serif" }}>@</Typography>
                        <Typography variant='h4' align='right' style={{ color: "#FFF", fontFamily: "'Nunito Sans', sans-serif", fontWeight: "bold" }}> University of Texas at Austin </Typography>
                        <Typography variant='body2' align='left' style={{ color: "#FFF", fontFamily: "'Nunito Sans', sans-serif" }}> - Completed PGP in AI/ML from Great Lakes (Great Learning Executive Learning) and University of Texas at Austin  </Typography>
                        <Typography variant='body2' align='left' style={{ color: "#FFF", fontFamily: "'Nunito Sans', sans-serif" }}> - Secured a place amongst the top 5 students of the batch. </Typography>

                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="#007bff">
                        September,2011 to June,2015
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paperAlt}>
                        <Typography variant="body2" align='left' style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: "bold" }}>
                            Bachelor's in Technology (Hons. )
                        </Typography>
                        <Typography variant='body2' align='left' style={{ fontFamily: "'Nunito Sans', sans-serif" }}>@</Typography>
                        <Typography variant='h4' align='left' style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: "bold" }}>University of Calicut</Typography>
                        <Typography variant='body2' align='left' style={{ fontFamily: "'Nunito Sans', sans-serif" }}> - Graduated from University of Calicut in Electronics and Communication Engineering Discipline in 2015. </Typography>
                        <Typography variant='body2' align='left' style={{ fontFamily: "'Nunito Sans', sans-serif" }}> - Secured 7.94/10 as CGPA </Typography>

                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="#007bff">
                        April,2010 to April,2011
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <SchoolIcon />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="body2" color="#10121A" align='right' style={{ color: "#FFF", fontFamily: "'Nunito Sans', sans-serif", fontWeight: "bold" }}>
                            Board Exam (Twelfth)
                        </Typography>
                        <Typography variant='body2' align='right' style={{ color: "#FFF", fontFamily: "'Nunito Sans', sans-serif" }}>@</Typography>
                        <Typography variant='h4' align='right' style={{ color: "#FFF", fontFamily: "'Nunito Sans', sans-serif", fontWeight: "bold" }}>CBSE (Central Board for Secondary Examination)</Typography>
                        <Typography variant='body2' align='left' style={{ color: "#FFF", fontFamily: "'Nunito Sans', sans-serif" }}> - Secured 88% in Physics, Chemistry and Mathematics stream </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

        </Timeline>
    );
}
