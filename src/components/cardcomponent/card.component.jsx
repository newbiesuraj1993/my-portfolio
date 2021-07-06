import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: 385,
    minWidth: 200
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  mediaIm: {
    height: '100px',
    width: '100px',



    //paddingTop: '56.25%', // 16:9
  },
  technologies: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "left",

  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PortfolioViewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const url = props.url;
  
  const images = props.technology;
  console.log(images);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const handleShareButton = () => {
    // Check if navigator.share is supported by the browser
    if (navigator.share) {
      console.log("Congrats! Your browser supports Web Share API");
      navigator
        .share({
          url: url
        })
        .then(() => {
          console.log("Sharing successfull");
        })
        .catch(() => {
          console.log("Sharing failed");
        });
    } else {
      console.log("Sorry! Your browser does not support Web Share API");
    }
  };
  return (
    
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.avatar}
          </Avatar>
        }

        title={props.title}
        subheader={props.subheader}
        style={{ color: "#FFF", fontFamily: "'Nunito Sans', sans-serif", fontWeight: "bold", textAlign: 'right' }}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <IconButton aria-label="share" onClick={handleShareButton}>
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Technologies Used : </Typography>
        </CardContent>
        <CardContent className={classes.technologies}>
        
          
          {
            images.map((img)=>{
              return <CardMedia
              className={classes.mediaIm}
              image={img}
              title="Paella dish"
            />
            })
          }

        </CardContent>



      </Collapse>
    </Card>
  );
}
