import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, useHistory } from 'react-router-dom';
import { Button, TextField, Typography, Checkbox } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from "@material-ui/core/styles";
import loginHero from '../../static/loginHero.jpg';

// API handler
import Auth from './auth';

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
		
		color: '#F7F7F7',
		'& TextField': {
			color: '#F7F7F7',
		},
		'& label': {
			color: '#808191',
		},
		'& input': {
			color: '#F7F7F7',
		},
		'& Button': {
			backgroundColor: '#3872F0',
			color: '#F7F7F7',
			margin: '10px 0',
		}

	},
	textField: {
		marginTop: '10px',
		marginBottom: '10px',
		color: '#F7F7F7'
	},
	forgotPass: {
		marginTop: '10px',
		float: 'right',
		
		'&:hover': {
			cursor: 'pointer'
		}
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
	// budget auth
	const { token, setToken } = props;
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [error, setError] = React.useState(undefined);
	const classes = useStyles();
    const history = useHistory();

	const handleLogin = async (e) => {
		setError(null); // hide any previous errors
		e.preventDefault();
		
		if (!email || !password) {
			setError('Fields cannot be empty!');
			return;
		}
		
		console.log('[>>] Firing request');
		
		await Auth.DoLogin(email, password).then((res) => {
			if (res.status !== 200) {
				setError('Wrong email or password!');
				return;
			}

			// poor mans auth
			localStorage.setItem('token', res.data.token);
			setToken(res.data.token);

		}).catch(error => {
			console.error(error);
			setError('Wrong email or password!');
		})

	}

	// authenticated
	if (token)
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
							color="#dee3ea"
							alt="password field"
							id="password"
							label="Password"
							type="password"
							variant="outlined"
							fullWidth
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						
						<label className={classes.formSubtext}>
							Remember me 
							<Checkbox
								value="checkedA"
								inputProps={{ 'aria-label': 'Checkbox A' }}
							/>
						</label>

						<label className={classes.forgotPass}>Forgot password?</label>

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
	token: PropTypes.string.isRequired,
	setToken: PropTypes.func.isRequired,
};