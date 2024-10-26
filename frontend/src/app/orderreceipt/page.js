'use client';
import React from 'react';
import { Container, Typography, Button, Card, CardContent, AppBar, Toolbar, Link, Box } from '@mui/material';

const OrderReceiptPage = () => {
  return (
    <Box sx={{
      backgroundImage: 'url(/images/cyberpunk.jpeg)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column'
    }}>
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

      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
        <Card sx={{ padding: 4, width: 600, height: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom sx={{ fontSize: '2.5rem' }}>
              Order Receipt
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.5rem', marginBottom: 3 }}>
              Your order has been placed successfully. Thank you!
            </Typography>

            <Link href="/cart" passHref>
              <Button variant="contained" color="primary" sx={{ padding: '12px 24px', fontSize: '1.25rem', marginTop: 2 }}>
                Return to Cart
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default OrderReceiptPage;
