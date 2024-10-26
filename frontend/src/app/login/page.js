'use client';

import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Alert, AppBar, Toolbar, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); 

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }
    setError('');

    console.log('Email:', email);
    console.log('Password:', password);

    router.push('/dashboard'); 
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url(/images/cyberpunk.jpeg)', // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: '#ff5722' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>CARCARE</Typography>
          <Button href="/dashboard" color="inherit">Home</Button> {/* Home Button */}
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
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent background
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Image inserted above the Login title */}
        <img 
          src="/images/carcare.png" // Path to your image
          alt="Car Care Logo" // Alt text for the image
          style={{ 
            width: '100%', // Make it responsive
            height: 'auto', // Maintain aspect ratio
            borderRadius: '8px', // Rounded corners
            marginBottom: '16px' // Space below the image
          }} 
        />
        
        <Typography variant="h4" component="h1" gutterBottom color='black'>
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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
          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ mt: 3 }}
          >
            Login
          </Button>
        </form>
        <Button 
          variant="outlined" 
          color="primary" 
          fullWidth 
          sx={{ mt: 2 }} 
          onClick={() => alert('Continue with Google')}
        >
          Continue with Google
        </Button>
        <Button 
          variant="text" 
          color="primary" 
          fullWidth 
          sx={{ mt: 2 }} 
          href="/register" // Redirects to the registration page
        >
          Register
        </Button>
      </Container>
    </Box>
  );
}

export default App;
