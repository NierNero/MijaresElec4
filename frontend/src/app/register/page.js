'use client';

import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Alert, AppBar, Toolbar, Box } from '@mui/material';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');

    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <Box sx={{
      backgroundImage: 'url(/images/cyberpunk.jpeg)', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <AppBar position="static" sx={{ backgroundColor: '#ff5722', marginBottom: 4, height: '80px' }}>
        <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '24px' }}>
            CARCARE
          </Typography>
            <Button href="/" color="inherit" sx={{ marginRight: 2 }}>Home</Button>
            <Button href="/login" color="inherit">Login</Button> {/* Changed from Logout to Login */}
        </Toolbar>
      </AppBar>

      <Container 
        maxWidth="xs" 
        sx={{ 
          mt: 8,
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '91vh',
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          padding: 4
        }}
      >
        {/* Image inside the container */}
        <img 
          src="images/carcare.png" 
          alt="Description of the image"
          style={{ 
            width: '100%', 
            height: 'auto',
            borderRadius: '8px',
            marginBottom: '16px',
          }} 
        />
        
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'DarkRed', fontWeight: 'bold' }}>
          Register
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
            size="small"
            helperText="We'll never share your email."
            sx={{
              '& .MuiInputLabel-root': {
                color: 'blue',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'green',
                },
                '&:hover fieldset': {
                  borderColor: 'orange',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'purple',
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
            size="small"
            helperText="Your password must be at least 6 characters."
            sx={{
              '& .MuiInputLabel-root': {
                color: 'blue',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'green',
                },
                '&:hover fieldset': {
                  borderColor: 'orange',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'purple',
                },
              },
            }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            size="small"
            helperText="Confirm your password."
            sx={{
              '& .MuiInputLabel-root': {
                color: 'blue',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'green',
                },
                '&:hover fieldset': {
                  borderColor: 'orange',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'purple',
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
            href="/login"
          >
            Register
          </Button>
        </form>
      </Container>
    </Box>
  );
}

export default App;