import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



import TmpRecent from '../../../static/tmpRecent.png';

const useStyles = makeStyles({
  root: {
    minWidth: 375,
    backgroundColor: '#3872F0',
    color: '#BACCF5'
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
    height: 200,
    width: 700
    },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
        </Typography>
        <Typography variant="h4" component="h2">
          Recently Accessed Lessons
        </Typography>
        {/* RENDER RECENT */}

        <CardMedia
            className={classes.media}
            image={TmpRecent}
            title="A lesson"
        />

      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}