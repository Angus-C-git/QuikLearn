import React from 'react';
import PropTypes, {string} from 'prop-types';

import { Redirect, useHistory } from 'react-router-dom';
import { Button, TextField, Typography } from '@material-ui/core';
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


export default function Register(props) {
  // budget auth
  const { token, setToken } = props;

	const [usrName, setUsername] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [error, setError] = React.useState(undefined);
	const classes = useStyles();
  const history = useHistory();

	const handleRegister = async (e) => {
    setError(null); // hide any previous errors
		e.preventDefault();
		
		if (!email || !password || !usrName) {
			setError('Fields cannot be empty!');
			return;
		}

    if (usrName.length < 4) {
      setError('Username must be at least 4 characters');
      return;
    }
    else if (email.length < 5) {
      setError('Please enter a valid email');
      return;
    }
    else if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    console.log('[>>] Firing request');
		
		await Auth.DoRegister(usrName, email, password).then((res) => {
			//console.log('DATA ::', res.data, res.status);
			if (res.status !== 200) {
				setError('Email Already Registered');
        return;
      }
      
      // stash the token, Poor mans auth
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
      

		}).catch(error => {
			console.error(error);
			setError('Registration failed');
		})
  
  }

  // again poor mans auth
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
						<Typography variant="h7">Welcome!</Typography>
						<Typography variant="h4">Enter your details to register</Typography>
            <TextField
							className={classes.textField}
							alt="username field"
							label="Username"
							id="username"
							variant="outlined"
							fullWidth
							value={usrName}
							onChange={(e) => setUsername(e.target.value)}
						/>
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
					
						{error && <Alert severity="error">{error}</Alert>}
						<Button alt="login-submit" onClick={handleRegister} variant="contained" color="primary" fullWidth>Signup Now</Button>
						
						<div className="switch-signing-in">
							Already have an account? {'    '}
						</div>
						<div>
							<Button alt="register here" id="register-here" onClick={() => history.push('/login')} variant="outlined">Login</Button>
						</div>
					</div>

				</div>
			</div>
			
		</>
	);
}

Register.propTypes = {
  token: PropTypes.string.isRequired,
  setToken: PropTypes.func.isRequired,
};
