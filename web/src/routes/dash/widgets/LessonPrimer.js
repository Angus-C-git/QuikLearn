import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
    //   maxWidth: 345,
        padding: theme.spacing(2),
        color: '#FFFFFF',
        backgroundColor: '#242730'
    },
    media: {
      height: 140,
    },

    topic: {
        color: '#B7B9D2'
    }
  }));
  


const LessonPrimer = ({ item }) => {
    const classes = useStyles();
    
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.img}
            title="A lesson"
          />
          <CardContent>
            <Typography gutterBottom className={classes.title} variant="body2" color="textSecondary" component="p">
              {item.topic}
            </Typography>
            <Typography variant="h6" component="h5">
              {item.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {item.date}
          </Button>
          <Button size="small" color="primary">
            yesterday
          </Button>
        </CardActions>
      </Card>
    );
}


export default LessonPrimer;