import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, TextField, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from "@material-ui/core/styles";

BASE_URL = 'TODO';

export default function Register(props) {
  const { token, setToken } = props;
  const [email, setEmail] = React.useState('');
  const [usrName, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const history = useHistory();

  // Submit all fields: name, email, group, password, course code
  const submit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password || !usrName || !courseCode || !group) {
        setError('Text fields cannot be empty!');
        return;
      }
      if (usrName.length < 4) {
        setError('Username must be at least 4 characters');
        return;
      }
      if (group.length < 4) {
        setError('Group must be at least 4 characters');
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords don't match");
        return;
      }
      if (courseCode.length < 6) {
        setError("Course registration key is incorrect");
        return;
      }
    //   const response = await fetch(`${BASE_URL}/user/register`, {
    //     body: JSON.stringify({
    //       email,
    //       usrName,
    //       group,
    //       password,
    //       courseCode
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     method: 'POST',
    //   });
    //   const responseData = await response.json();
    //   if (responseData.error) {
    //     setError(responseData.error);
    //     return;
    //   }
    //   if (response.status === 200) {
    //     localStorage.setItem('token', responseData.token);
    //     setToken(responseData.token);
    //   }
    } catch (err) {
        console.log(err);
    }
  };

  if (token) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', padding: '20px',
      }}
      >
        <form onSubmit={submit}>
          <Typography data-testid="register-heading" id="register-heading" variant="h5" alt="reg header">Register</Typography>
          <TextField
            id="email"
            name="email"
            label="Email (used to log you in and reset your password)"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            alt="Email field"
          
          />
          <TextField
            id="name"
            name="name"
            label="Username"
            fullWidth
            value={usrName}
            onChange={(e) => setName(e.target.value)}
            alt="Name field"
            
          />
          <TextField
            id="password"
            name="password"
            label="Password (minimum 6 characters)"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            alt="Password field"
            
          />
          <TextField
            id="confirmpass"
            name="confirmpass"
            label="Confirm Password"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            alt="Confirm Password field"
          />
          {error && <Alert severity="error">{error}</Alert>}
          <Button id="register-submit" data-testid="signup-bttn-test" alt="Register now" variant="contained" color="primary" type="submit" fullWidth>Sign Up</Button>
        </form>
        <br />
        <div className="switch-signing-in">
          Already have an account?
          <Button onClick={() => history.push('/login')} id="login-redirect-bttn" data-testid="login-redirect-bttn" alt="Redirect to login page" variant="outlined">Log in here</Button>
        </div>
      </div>
    </>
  );
}

Register.propTypes = {
  token: PropTypes.string.isRequired,
  setToken: PropTypes.func.isRequired,
};
