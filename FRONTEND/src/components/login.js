import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setEmail, setPass, setName } from './shopping';
import axios from 'axios';
import './login.css';
import './store.js';
import { useDispatch } from 'react-redux';
import { setUsername } from './UserSlice';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    // backgroundImage:"url(https://images.pexels.com/photos/2959595/pexels-photo-2959595.jpeg?auto=compress&cs=tinysrgb&w=600)",
    // backgroundrepeate:'no-repeate',
  },
  login: {
    width: '350px',
    padding: '40px',
    border: '2px solid black',
    borderRadius: '4px',
    color:'white',
   backgroundColor: 'black',
    // backgroundImage:'https://images.pexels.com/photos/4906249/pexels-photo-4906249.jpeg?auto=compress&cs=tinysrgb&w=60',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    color:'white',
    textTransform: 'uppercase',
    backgroundImage:'https://images.pexels.com/photos/7096339/pexels-photo-7096339.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '20%',
    textAlign: 'center',
    padding: '20px',
    fontSize: '16px',
    backgroundColor: '#33bbff',
    color: 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft:'140px',
  },
  registerLink: {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'white',
  },
};


function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const check = async (e) => {
    e.preventDefault();
    try {
      console.log(email);
      console.log(pass);
      const response = await axios.post(
        "http://localhost:8181/api/v1/auth/authenticate",
        {
          email: email,
          password: pass,
        }
      );

      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      console.log(localStorage.getItem('token'));
      dispatch(setUsername(email));
      window.alert("Successfully Logged In");

      navigate("/home");
    } catch (error) {
      console.log(error);
      window.alert("Invalid Credentials");
    }
  };

  const navigate = useNavigate();
  const [checkpass, setCheckPass] = useState(false);

  return (
    <div className="log">
      <div style={styles.container}>
        <div style={styles.login}>
          <form onSubmit={check}>
            <h2 style={styles.title}>Login</h2>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email:</label>
              <input
                style={styles.input}
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Password:</label>
              <input
                style={styles.input}
                type="password"
                name="pass"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button style={styles.button} type="submit">
              Login
            </button>
            {checkpass && alert('Successful login ' )}
            {checkpass && navigate('/home')}
            <Link to="/signup" style={styles.registerLink}>
              Don't have an account? Register
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
