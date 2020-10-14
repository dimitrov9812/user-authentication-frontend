import React, {useState} from 'react';
import { Card, RaisedButton, TextField } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import { Link, Route } from 'react-router-dom';
import Axios from 'axios';

const LoginForm = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loginUser = (event) => {
    event.preventDefault();
    const URL = "http://localhost:5000/api/user/login"
    const HEROKUURL = "https://u-auth-api.herokuapp.com/api/user/login";

    Axios.post(HEROKUURL, {"email": email, "password": password}).then((res) => {
      console.log(res);
      if(res.status === 200) {
        history.push("/home");
      }
    }).catch((err) => {
      console.log(err)
      console.log(err.response.data.error.details[0].message)
      setError(err.response.data.error.details[0].message)
    })
  }
  
  return (
    <div>
      <MuiThemeProvider>
        <Card>
          <div style={{padding:20}}>
            <TextField
              hintText="Enter your Email"
              floatingLabelText="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <h6 style={{color:'red'}}>{error}</h6>
            <RaisedButton label="Submit" primary={true} onClick={(event) => loginUser(event)} />
            <h6>Don't have an account? <Link to="/register">Register here</Link></h6>
          </div>
        </Card>
      </MuiThemeProvider>
    </div>
  );
}

export default LoginForm;
