'use client';
import React, { useState } from 'react';
import { Container, Typography, Button, Card, CardContent, TextField, Box, AppBar, Toolbar, Link } from '@mui/material';

const AccountSettingsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Add logic to handle form submission
    console.log(formData);
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url(/images/cyberpunk.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
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

      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
        <Card sx={{ padding: 4, boxShadow: 3, backgroundColor: 'rgba(0,0,0,0.7)', color: '#fff' }}>
          <CardContent>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: 4 }}>
              Account Settings
            </Typography>
            
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
              <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ backgroundColor: '#ff5722' }}>
                Save Changes
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default AccountSettingsPage;
