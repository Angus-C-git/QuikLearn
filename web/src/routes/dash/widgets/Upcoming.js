import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as FaIcons from 'react-icons/fa';

import UpcomingLogo from '../../../static/minecraft.png';

const useStyles = makeStyles({
    root: {
        minWidth: 50,
        maxWidth: 650,
        backgroundColor: '#FFCA00',
        color: '#FFFFFF'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 50,
        width: 50
    },
});

export default function Upcoming() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        </Typography>
        <Typography variant="h4" component="h2">
            Next Live Lesson: 
        </Typography>

        <CardMedia
            className={classes.media}
            image={UpcomingLogo}
            title="A lesson"
          />
        <Typography variant="h5" component="h5">
            How to use loops in Minecraft
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Oliver Smith
        </Typography>
        <Typography variant="body2" component="p">
            4hrs 32mins
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Remind Me</Button> <FaIcons.FaPlusCircle />
      </CardActions>
    </Card>
  );
}