import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';



const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#3293a8',
    color: 'black',
    border: 'none',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your signup logic here
    if (password === confirmPassword) {
      // Successful signup, navigate to login page
      setError('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setFirstname('');
      setLastname('');
      alert('Signup successful!');
      navigate('/Home')
    } else {
      // Passwords do not match, display error message
      setError('Passwords do not match');
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Registration
        </h2>
        {error && <p style={styles.error}>{error}</p>}
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
         <input
          style={styles.input}
          type="Firstname"
          placeholder="Firstname"
          value={Firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
         <input
          style={styles.input}
          type="Lastname"
          placeholder="Lastname"
          value={Lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
      
        <button style={styles.button} type="submit"><Link to="/home">Signup</Link></button>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </form>
    </div>
  );
  }
export default Signup;