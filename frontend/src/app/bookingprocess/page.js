'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography, TextField, Button, MenuItem, Box, Card, CardContent, AppBar, Toolbar, Link } from '@mui/material';

const App = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#ff5722', marginBottom: 4 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            CARCARE
          </Typography>
          <Link href="/" color="inherit" sx={{ marginRight: 2, fontWeight: 'bold' }}>Home</Link>
          <Link href="/cart" color="inherit" sx={{ marginRight: 2, fontWeight: 'bold' }}>Cart</Link>
          <Link href="/book" color="inherit" sx={{ marginRight: 2, fontWeight: 'bold' }}>Book</Link>
          <Link href="/login" color="inherit" sx={{ fontWeight: 'bold' }}>Logout</Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

const mechanics = [
  'Aldecaldos Mechanic 1',
  'Aldecaldos Mechanic 2',
  'Aldecaldos Mechanic 3',
];

export default function Booking() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [shop, setShop] = useState('');
  const [date, setDate] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = { name, address, shop, date };

    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));

    router.push('/bookingreceipt');
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url(/images/cyberpunk.jpg)', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <App />
      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <Card variant="outlined" sx={{ padding: 3, borderRadius: '12px', borderColor: '#ff5722', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#ff5722' }}>
              Book a Repair Appointment
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                margin="normal"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                select
                label="Select Aldecaldos Mechanic"
                variant="outlined"
                margin="normal"
                value={shop}
                onChange={(e) => setShop(e.target.value)}
                required
                sx={{ marginBottom: 2 }}
              >
                {mechanics.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                label="Preferred Date"
                type="date"
                variant="outlined"
                margin="normal"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ marginBottom: 2 }}
              />
              <Box sx={{ marginTop: 3 }}>
                <Button variant="contained" color="primary" fullWidth type="submit" sx={{ padding: '10px 0', backgroundColor: '#ff5722', fontWeight: 'bold' }}>
                  Book Appointment
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
