import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Sidebar from '../../modules/sidebar/Sidebar';

// tmp
import Login from '../auth/Login';
import Feed from './widgets/Feed';
import Recent from './widgets/Recent';
import Upcoming from './widgets/Upcoming';
// import Dashboard from './Dashboard';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 4,
		flexGrow: 1,
        marginLeft: '20%',
	},
	control: {
		padding: theme.spacing(2),
	},
    sectionTitle: {
        color: '#FFFFFF',
    },
}));

export default function Dashboard(props) {
	const classes = useStyles();
	const { token } = props;
	if (!token)
		return <Redirect to="/login" />;

    return (
        <Router>
          <Sidebar />
          <div className={classes.root}>
                <Typography className={classes.sectionTitle} variant="h3" component="h2">
                        Home
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Recent />
                    </Grid>
                    <Grid item xs={6}>
                       <Upcoming />
                    </Grid>

                    <Feed />
                </Grid>
                
                <Switch>
                    <Route path='/dashboard' />
                    <Route path='/reports' exact component={Login} />
                    <Route path='/reports/reports1' exact component={Login} />
                    <Route path='/reports/reports2' exact component={Login} />
                    <Route path='/reports/reports3' exact component={Login} />
                    <Route path='/team' exact component={Login} />
                </Switch>
            </div>
        </Router>
      );
}

Dashboard.propTypes = {
	token: PropTypes.string.isRequired
};
