import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const registration = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    // send a request to the server for authentication
    axios.post('https://healthypotatoes.herokuapp.com/login', {
      username: username,
      password: password,
    })
    .then(res => {
      const data = res.data;
      props.onLoggedIn(data);
    })
    .catch(e => {
      alert('Incorrect info, please try again.')
    });
      // workaround for authentication
    // props.onLoggedIn(username);
  };

  return (
    <Container className='loginContainer'>
      <h1>Welcome to some HealthyPotatoes!</h1>
      <form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Ilovemovies" value={username} onChange={e => setUsername(e.target.value)} />
          <Form.Text className="emailShare">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button id='loginButton' onClick={handleSubmit}>
          Log in
        </Button>

        <Form.Group controlId='newUser'>
          <Form.Text>New User? Click 
   
          <Link to={`/register`}>
            <Button size='sm' id='registerButton'>here</Button>
          </Link>

          </Form.Text>
        </Form.Group>
      </form>
    </Container>
  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
};
