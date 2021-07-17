import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Button, TextField, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from "@material-ui/core/styles";

import loginHero from '../../static/loginHero.jpg';

// import Logo from '../static/logo.svg';


const useStyles = makeStyles((theme) => ({
	loginContainer: {
		display: 'flex',
		flexFlow: 'column wrap',
		alignContent: 'flex-start',
		justifyContent: 'center',
		height: '100vh',
	},
	formFields: {
		width: '25%',
		textAlign: 'left',
		marginRight: '250px',
		
		// marginTop: '5px',
        // marginBottom: '5px',
		color: '#dee3ea',
		'& TextField': {
			color: '#dee3ea',
		},
		'& label': {
			color: '#dee3ea',
		},
		'& input': {
			color: '#dee3ea',
		},
		'& Button': {
			backgroundColor: '#3872F0',
			color: '#F7F7F7',
			margin: '10px 0',
		}

	},
	textField: {
		marginTop: '10px',
		marginBottom: '10px'
	},
	title: {
		marginTop: '8px',
	},
	loginHero: {
		'& img': {
			height: '100vh',
			width: '80%'
		}
	}
}));


export default function Login(props) {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [error, setError] = React.useState(undefined);
	const classes = useStyles();
    const history = useHistory();

	const [
		redirectToDash,
		setRedirectToDash
	] = React.useState(false);


	const handleLogin = async (e) => {

		e.preventDefault();
		try {
			if (!email || !password) {
				setError('Text fields cannot be empty!');
				return;
			}

			// await login({variables: {email: email, password: password}}).then((data) => {
			// 	const res = data.data.login[0].message;
			// 	console.log("DATA ::",res);

			// 	if (res !== 'success') {
			// 		setError(res);
			// 		return null;
			// 	}

			// 	setError(null); // hide any previous errors
			// 	setRedirectToDash(true);

			// }).catch((err) => {
			// 	console.error('[>>] Login failed', err);
			// 	setError(`Incorrect Credentials`);
			// });

		} catch (err) {
			console.log(err);
		}
	};

	if (redirectToDash)
		return <Redirect to="/dashboard" />;


	return (
		<>
			<div className={classes.root}>
				<div className={classes.loginContainer}>

					<div className={classes.loginHero}>
						<img src={loginHero}></img>
					</div>

					<div className={classes.formFields}>
						<Typography variant="h7">Welcome back</Typography>
						<Typography variant="h4">Login to your account</Typography>
						<TextField
							className={classes.textField}
							alt="email field"
							label="Email"
							id="email"
							variant="outlined"
							fullWidth
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							className={classes.textField}
							color="--primary-text"
							alt="password field"
							id="password"
							label="Password"
							type="password"
							variant="outlined"
							fullWidth
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						{error && <Alert severity="error">{error}</Alert>}
						<Button alt="login-submit" onClick={handleLogin} variant="contained" color="primary" fullWidth>Login Now</Button>
						
						<div className="switch-signing-in">
							Don&#39;t have an account? {'    '}
						</div>
						<div>
							<Button alt="register here" id="register-here" onClick={() => history.push('/register')} variant="outlined">Register here</Button>
						</div>
					</div>

				</div>
			</div>
			
		</>
	);
}

Login.propTypes = {
};