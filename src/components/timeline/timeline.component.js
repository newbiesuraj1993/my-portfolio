import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
        margin:'auto',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#7dc5ff'
        }
    }

}));

export default function CustomizedTimeline() {
    const classes = useStyles();

    return (
        <Timeline align="alternate">
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="#007bff">
                        June 28, 2021
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <CodeOutlinedIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="body2" align='right' style={{ color: "#FFF", fontFamily: "'Nunito Sans', sans-serif", fontWeight: "bold" }} >
                            Full Stack Developer - BA4
                        </Typography>
                        <Typography variant='body2' align='right' style={{ color: "#FFF", fontFamily: "'Nunito Sans', sans-serif" }}>@</Typography>
                        <Typography variant='h4' align='right' style={{ color: "#FFF", fontFamily: "'Nunito Sans', sans-serif", fontWeight: "bold" }}> Barclays PLC </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="#007bff">
                        March 02, 2020
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paperAlt}>
                        <Typography variant="body2" color="#10121A" align='left' style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: "bold" }}>
                            Senior Developer
                        </Typography>
                        <Typography variant='body2' align='left' style={{ fontFamily: "'Nunito Sans', sans-serif" }}>@</Typography>
                        <Typography variant='h4' align='left' style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: "bold" }}>Standard Chartered Bank</Typography>
                        <Typography variant='body2' align='left' style={{ fontFamily: "'Nunito Sans', sans-serif" }}> - Full Stack Developer with experience in designing and implementing cloud native micro services. </Typography>
                        <Typography variant='body2' align='left' style={{ fontFamily: "'Nunito Sans', sans-serif" }}> - Experience in working with Corporate, Commercial and Institutional Banking solution implementation. </Typography>
                        <Typography variant='body2' align='left' style={{ fontFamily: "'Nunito Sans', sans-serif" }}> - Worked as a product developer in <b>SCPay</b> - organization's in-house built cloud native platform for FAST payments.  </Typography>

                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="#007bff">
                        June 01, 2019
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <CodeOutlinedIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="body2" color="#10121A" align='right' style={{ color: "#FFF", fontFamily: "'Nunito Sans', sans-serif", fontWeight: "bold" }}>
                            Technology Analyst
                        </Typography>
                        <Typography variant='body2' align='right' style={{ color: "#FFF", fontFamily: "'Nunito Sans', sans-serif" }}>@</Typography>
                        <Typography variant='h4' align='right' style={{ color: "#FFF", fontFamily: "'Nunito Sans', sans-serif", fontWeight: "bold" }}>Infosys Technologies</Typography>

                        <Typography variant='body2' align='left' style={{ color: "#FFF", fontFamily: "'Nunito Sans', sans-serif" }}> - Java Back End Developer (Spring Boot) with experience in designing and implementing cloud native micro services. </Typography>
                        <Typography variant='body2' align='left' style={{ color: "#FFF", fontFamily: "'Nunito Sans', sans-serif" }}> - Experience in working as a Product Developer for Infosys' product - Infosys McCamish <b> NGIN</b> (Next Generation Insurance Navigator). </Typography>



                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="#007bff">
                        November 30, 2015
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paperAlt}>
                        <Typography variant="body2" color="#10121A" align='left' style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: "bold" }}>
                            Developer
                        </Typography>
                        <Typography variant='body2' align='left' style={{ fontFamily: "'Nunito Sans', sans-serif" }}> @</Typography>
                        <Typography variant='h4' align='left' style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: "bold" }}>Infosys Technologies</Typography>
                        <Typography variant='body2' align='left' style={{ fontFamily: "'Nunito Sans', sans-serif" }}> - Full Stack Developer with experience in designing and implementing cloud native micro services. </Typography>
                        <Typography variant='body2' align='left' style={{ fontFamily: "'Nunito Sans', sans-serif" }}> - Experience in working in Machine Learning and Artifical Intelligence Projects. </Typography>
                        <Typography variant='body2' align='left' style={{ fontFamily: "'Nunito Sans', sans-serif" }}> - Designed and implemented a Natural Language Processing (NLP) solution for internal teams at Infosys for analyzing the support system data at backend.  </Typography>

                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
