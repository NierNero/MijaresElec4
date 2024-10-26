'use client';
import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, TextField, Button, AppBar, Toolbar, Link, Box } from '@mui/material';

const CustomerSupport = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle support message submission logic here
    console.log('Support message submitted:', { name, email, message });
  };

  return (
    <Box sx={{
      backgroundImage: 'url(/images/cyberpunk.jpeg)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column'
    }}>
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: 'rgba(255, 87, 34, 0.8)', height: '80px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '24px', color: '#fff' }}>
            CARCARE
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" sx={{ marginRight: 2, color: 'inherit', fontWeight: 'bold', fontSize: '18px' }}>Home</Link>
            <Link href="/cart" sx={{ marginRight: 2, color: 'inherit', fontWeight: 'bold', fontSize: '18px' }}>Cart</Link>
            <Link href="/book" sx={{ marginRight: 2, color: 'inherit', fontWeight: 'bold', fontSize: '18px' }}>Book</Link>
            <Link href="/login" sx={{ color: 'inherit', fontWeight: 'bold', fontSize: '18px' }}>Logout</Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4,
        padding: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark container
        borderRadius: 3,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        border: '2px solid #e0e0e0',
      }}>
        <Card sx={{ width: '100%', padding: 2, backgroundColor: '#fff', boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom sx={{ color: '#ff5722', textAlign: 'center' }}>
              Customer Support
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 2 }}>
              We're here to help. Please fill out the form below.
            </Typography>

            <form onSubmit={handleFormSubmit}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{ marginBottom: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ backgroundColor: '#ff5722', fontSize: '18px', padding: '12px' }}
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default CustomerSupport;
