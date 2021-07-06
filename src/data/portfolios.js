  
import spring from '../imgs/portImages/spring_boot.png';
import react from '../imgs/portImages/reactjs.jpg';
import python from '../imgs/portImages/python.png';
import springbt from '../imgs/portImages/icon_bt.png';
import kafka from '../imgs/portImages/kafka.jpg';
import twitter from '../imgs/portImages/twitter.png';
import redis from '../imgs/portImages/redis.png';
import django from '../imgs/portImages/django.png';
import keras from '../imgs/portImages/keras.png';
import sklearn from '../imgs/portImages/sklearn.png';
import reactjs from '../imgs/portImages/react_ic.png';
import redux from '../imgs/portImages/redux.png';
import netlify from '../imgs/portImages/netlify.png';
import material from '../imgs/portImages/material.png';


const portfolios = [
    {
        id: 1,
        category: 'J',
        image: spring,
        link1: 'https://github.com/newbiesuraj1993/cowinapi',
        link2: 'https://github.com/newbiesuraj1993/cowinapi',
        title: 'CoWin API Integration',
        text: 'CoWin API by Indian Govt consumed using Spring Boot framework',
        date: 'June, 2021',
        technologies: [springbt,kafka,twitter,redis]
    },
    {
        id: 2,
        category: 'Py',
        image: python,
        link1: 'https://github.com/newbiesuraj1993/Text-Analytics-Project',
        link2: 'https://github.com/newbiesuraj1993/Text-Analytics-Project',
        title: 'Natural Language Processing',
        text: 'Analyzing Ticket Data on large unprocessed ticket data set.',
        date: 'June, 2019',
        technologies: [python,keras,django,sklearn]
        
    },
    {
        id: 3,
        category: 'JS',
        image: react,
        link1: 'https://github.com/newbiesuraj1993/chat-me',
        link2: 'https://github.com/newbiesuraj1993/chat-me',
        title: 'Using Chat Engine for Chat Me',
        text: 'React JS project built using chat engine for building a chat application',
        date: 'June, 2021',
        technologies: [reactjs,redux,netlify,material]
    },
    
]

export default portfolios;