'use client';
import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Card, CardContent, Grid, AppBar, Toolbar, Link, Box, CardMedia, TextField, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';

const OrderPage = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  const [message, setMessage] = useState('');
  const [paymentOption, setPaymentOption] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedOrderDetails = localStorage.getItem('orderDetails');
    if (storedOrderDetails) {
      setOrderItems(JSON.parse(storedOrderDetails));
    }
  }, []);

  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const shippingCost = () => {
    return shippingOption === 'express' ? 10 : 5;
  };

  const handlePlaceOrder = () => {
    if (shippingOption && paymentOption) {
      // Handle the place order logic
      router.push('/orderreceipt');
    } else {
      alert('Please select shipping and payment options.');
    }
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

      <Container maxWidth="md" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
        <Card sx={{ padding: 2, marginTop: 2, position: 'relative', boxShadow: 3, width: '100%', backgroundColor: '#000', color: '#fff' }}>
          <CardContent>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#ff5722' }}>
              CheckOut
            </Typography>

            {/* Display Order Items */}
            {orderItems.map((item) => (
              <Grid container key={item.id} spacing={2} sx={{ marginBottom: 2 }}>
                <Grid item xs={4}>
                  <CardMedia
                    component="img"
                    height="100"
                    image={item.imageUrl}
                    alt={item.name}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" sx={{ color: '#fff' }}>{item.name}</Typography>
                  <Typography variant="body2" sx={{ color: '#ddd' }}>{item.description}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1" sx={{ color: '#fff' }}>Price: ${item.price}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1" sx={{ color: '#fff' }}>Quantity: {item.quantity}</Typography>
                </Grid>
              </Grid>
            ))}

            {/* Product Subtotal */}
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'right', marginTop: 2, color: '#fff' }}>
              Product Subtotal: ${calculateTotal()}
            </Typography>

            {/* Shipping Options */}
            <Typography variant="h6" sx={{ marginTop: 2, color: '#fff' }}>Shipping Options:</Typography>
            <TextField
              select
              label="Select Shipping"
              value={shippingOption}
              onChange={(e) => setShippingOption(e.target.value)}
              fullWidth
              sx={{ marginTop: 1, backgroundColor: '#fff', borderRadius: '4px' }}
            >
              <MenuItem value="standard">Standard Shipping - $5</MenuItem>
              <MenuItem value="express">Express Shipping - $10</MenuItem>
            </TextField>

            {/* Message to Seller */}
            <Typography variant="h6" sx={{ marginTop: 2, color: '#fff' }}>Message to Seller:</Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Leave a message for the seller (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{ marginTop: 1, backgroundColor: '#fff', borderRadius: '4px' }}
            />

            {/* Payment Options */}
            <Typography variant="h6" sx={{ marginTop: 2, color: '#fff' }}>Payment Options:</Typography>
            <TextField
              select
              label="Select Payment"
              value={paymentOption}
              onChange={(e) => setPaymentOption(e.target.value)}
              fullWidth
              sx={{ marginTop: 1, backgroundColor: '#fff', borderRadius: '4px' }}
            >
              <MenuItem value="credit_card">Credit Card</MenuItem>
              <MenuItem value="paypal">PayPal</MenuItem>
              <MenuItem value="bank_transfer">Bank Transfer</MenuItem>
            </TextField>

            {/* Shipping Subtotal */}
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'right', marginTop: 2, color: '#fff' }}>
              Shipping Subtotal: ${shippingCost()}
            </Typography>

            {/* Order Total */}
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'right', marginTop: 2, color: '#fff' }}>
              Order Total: ${calculateTotal() + shippingCost()}
            </Typography>

            {/* GIF at the bottom */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
              <img src="/images/cyberload.gif" alt="GIF" style={{ width: '480px', height: 'auto' }} />
            </Box>

            {/* Place Order Button */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
              <Button variant="contained" color="secondary" onClick={() => router.back()} sx={{ backgroundColor: '#ff5722' }}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handlePlaceOrder} sx={{ backgroundColor: '#ff5722' }}>
                Place Order
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default OrderPage;
