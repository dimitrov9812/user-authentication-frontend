import React from 'react';
import Home from './screens/home/Home';
import LoginForm from './screens/login-form/LoginForm';
import RegisterForm from './screens/register-form/RegisterForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div style={{display:"flex", flexDirection:'row', justifyContent:'center'}}>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginForm} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/register" exact component={RegisterForm} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
