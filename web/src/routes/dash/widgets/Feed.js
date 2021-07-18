import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LessonPrimer from './LessonPrimer';
import Typography from '@material-ui/core/Typography';

//tmp
import { FeedContent } from './FeedContent';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    // paper: {
    //   padding: theme.spacing(2),
    //   textAlign: 'center',
    //   color: theme.palette.text.secondary,
    // },
    sectionTitle: {
        color: '#FFFFFF',
    },
  }));


export default function Feed() {
    const classes = useStyles();
  
    return (
        <>
            <Grid item xs={12}>
                <Typography className={classes.sectionTitle} variant="h3" component="h2">
                        Most Recent
                </Typography>
            </Grid>

            {FeedContent.map((item) => {
                    return (
                        <Grid item xs={3}>
                            <LessonPrimer item={item}/>
                        </Grid>
                    );
            })}
        </>
    );
  }