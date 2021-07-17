import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 4,
		flexGrow: 1,
	},
	control: {
		padding: theme.spacing(3),
	},
}));

export default function Dashboard(props) {
	const classes = useStyles();
	const { token } = props;
	if (!token)
		return <Redirect to="/login" />;

	return (
		<BrowserRouter>
            <h1>Dashboard Placeholder</h1>


		</BrowserRouter>
	)
}

Dashboard.propTypes = {
	token: PropTypes.string.isRequired
};