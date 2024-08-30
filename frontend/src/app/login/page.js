'use client'

import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Alert } from '@mui/material';

function App() {
  // State to hold the input values and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // Clear previous error message
    setError('');

    // For demonstration, we're just logging the values
    console.log('Email:', email);
    console.log('Password:', password);

    // Normally you would send the credentials to your backend here
    // fetch('https://your-backend-api.com/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.success) {
    //       // Handle successful login
    //       console.log('Login successful!');
    //       setEmail(''); // Clear email field
    //       setPassword(''); // Clear password field
    //     } else {
    //       // Handle login failure
    //       setError('Invalid email or password.');
    //     }
    //   })
    //   .catch(error => {
    //     // Handle network errors
    //     setError('An error occurred. Please try again.');
    //   });

    // Clear the form fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <Container 
      maxWidth="xs" 
      sx={{ 
        mt: 8,
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '91vh'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form 
        onSubmit={handleSubmit} 
        style={{ width: '100%' }}
      >
        <TextField
  label="Email"
  type="email"
  variant="outlined"
  fullWidth
  margin="normal"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  size="small" // Change to 'small' or 'medium'
  helperText="We'll never share your email." // Add helper text
  sx={{ // Custom styles
    '& .MuiInputLabel-root': {
      color: 'blue', // Change label color
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'green', // Change border color
      },
      '&:hover fieldset': {
        borderColor: 'orange', // Change border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'purple', // Change border color when focused
      },
    },
  }}
/>
<TextField
  label="Password"
  type="password"
  variant="outlined"
  fullWidth
  margin="normal"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
  size="small" // Change to 'small' or 'medium'
  helperText="Your password must be at least 6 characters." // Add helper text
  sx={{ // Custom styles
    '& .MuiInputLabel-root': {
      color: 'blue', // Change label color
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'green', // Change border color
      },
      '&:hover fieldset': {
        borderColor: 'orange', // Change border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'purple', // Change border color when focused
      },
    },
  }}
/>

        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 3 }}
        >
          
          <a href="/dashboard">Login</a>
        </Button>
      </form>
    </Container>
  );
}

export default App;
