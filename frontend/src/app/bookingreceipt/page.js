'use client';
import { useEffect, useState } from 'react';
import { Container, Typography, Box, Card, CardContent, Button, AppBar, Toolbar } from '@mui/material';
import Link from 'next/link';

const App = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#ff5722' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '24px' }}>
          CARCARE
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link href="/" color="inherit">Home</Link>
          <Link href="/cart" color="inherit">Cart</Link>
          <Link href="/book" color="inherit">Book</Link>
          <Link href="/login" color="inherit">Logout</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default function BookingReceipt() {
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const storedDetails = localStorage.getItem('bookingDetails');
    if (storedDetails) {
      setBookingDetails(JSON.parse(storedDetails));
    }
  }, []);

  if (!bookingDetails) {
    return null;
  }

  const { name, address, shop, date } = bookingDetails;

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
      <Container
        maxWidth="md" // Make the container medium-sized
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4, // Add padding for more space
        }}
      >
        <Card variant="outlined" sx={{ padding: 3, borderColor: 'primary.main', position: 'relative', borderRadius: '12px', width: '100%' }}>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom sx={{ fontSize: '1.8rem' }}>
              Booking Receipt
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ fontSize: '1.4rem' }}>
              Thank you for your booking!
            </Typography>
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="body1" sx={{ fontSize: '1.2rem' }}><strong>Name:</strong> {name}</Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem' }}><strong>Address:</strong> {address}</Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem' }}><strong>Repair Shop:</strong> {shop}</Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem' }}><strong>Date:</strong> {date}</Typography>
            </Box>
            <Box sx={{ marginTop: 4 }}>
              <Link href="/service" passHref>
                <Button variant="contained" color="primary" fullWidth>
                  Back to Service Page
                </Button>
              </Link>
            </Box>
          </CardContent>
          <img src="/images/liljohn.png" alt="Sticker" style={{ position: 'absolute', right: 20, top: 20, width: '250px', height: 'auto' }} /> {/* Give more space for the sticker */}
        </Card>
      </Container>
    </Box>
  );
}
