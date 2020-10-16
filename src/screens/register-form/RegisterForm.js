import React, { useState } from 'react';
import { Card, RaisedButton, TextField } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const RegisterForm = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const registerUser = (event) => {
    event.preventDefault();
    const URL = "http://localhost:5000/api/user/register";
    const HEROKUURL = "https://u-auth-api.herokuapp.com/api/user/register";

    Axios.post(HEROKUURL, {"name": username, "email": email, "password": password}).then((res) => {
      console.log(res);
      if(res.status === 200) {
        history.push("/login");
      }
    }).catch((err) => {
      console.log("Lookre")
      console.log(err);
      setError(err.response.data);
      console.log(err.response.data)
    })
  }

  return (
    <div style={{flexWrap:"wrap",alignSelf:'center'}}>
      <MuiThemeProvider>
        <Card style={{padding:20}}>
        <img width="300" height="300" src={require("../../images/logo.png")}/>
          <div style={{padding:20}}>
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
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
            <RaisedButton label="Submit" primary={true} onClick={(event) => registerUser(event)} />
            <h6>Already have an account? <Link to="/login">Login here</Link></h6>
          </div>
        </Card>
      </MuiThemeProvider>
    </div>
  );
}

export default RegisterForm;
