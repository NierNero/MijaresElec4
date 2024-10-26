'use client';
import React, { useState } from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, IconButton, Checkbox, AppBar, Toolbar, Link, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from 'next/image'; // Use Next.js Image component

const CartPage = () => {
  
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Brakes', price: 10, quantity: 1, selected: false, imageUrl: '/images/brake.jpg' },
    { id: 2, name: 'Motor Oil', price: 20, quantity: 1, selected: false, imageUrl: '/images/oil.png' },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleSelectionChange = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems
      .filter((item) => item.selected)
      .reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleAction = (action) => {
    if (action === 'remove') {
      setCartItems(cartItems.filter((item) => !item.selected));
    }
  };

  const handleCheckout = () => {
    const selectedItems = cartItems.filter((item) => item.selected);
    localStorage.setItem('orderDetails', JSON.stringify(selectedItems)); 
  };

  return (    
    <Box>
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
        <AppBar position="static" sx={{ backgroundColor: '#ff5722', marginBottom: 4, height: '80px' }}>
          <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '24px' }}>
              CARCARE
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link href="/" color="inherit" sx={{ marginRight: 2, fontWeight: 'bold', fontSize: '18px' }}>Home</Link>
              <Link href="/cart" color="inherit" sx={{ marginRight: 2, fontWeight: 'bold', fontSize: '18px' }}>Cart</Link>
              <Link href="/book" color="inherit" sx={{ marginRight: 2, fontWeight: 'bold', fontSize: '18px' }}>Book</Link>
              <Link href="/login" color="inherit" sx={{ fontWeight: 'bold', fontSize: '18px' }}>Logout</Link>
              <Link href="/profile" sx={{ color: 'inherit', marginLeft: 2 }} aria-label="Profile">
                <AccountCircleIcon sx={{ fontSize: 30 }} /> 
              </Link>
            </Box>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 0, 0.8)', 
            borderRadius: 3,
            padding: 4,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            maxWidth: '1200px', 
            margin: '0 auto', 
            border: '2px solid #e0e0e0',
          }}
        >
          <Container maxWidth="lg">
            {/* Replace Cart title with an image */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
              <Image
                src="/images/cart.jpg" // Replace with the path to your image
                alt="Cart Image"
                width={200}
                height={200}
              />
            </Box>

            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                {cartItems.map((item) => (
                  <Card
                    key={item.id}
                    sx={{
                      marginBottom: 3,
                      borderRadius: 2,
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                      backgroundColor: '#fff', 
                      padding: 3,
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #e0e0e0',
                      height: '150px', 
                      transition: '0.3s',
                      '&:hover': {
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                      },
                    }}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={120}
                      height={120}
                      style={{ borderRadius: '4px', marginRight: '16px' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={1}>
                          <Checkbox
                            checked={item.selected}
                            onChange={() => handleSelectionChange(item.id)}
                          />
                        </Grid>
                        <Grid item xs={5}>
                          <Typography variant="h6">{item.name}</Typography>
                          <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography variant="body1" color="primary">Price: ${item.price}</Typography>
                        </Grid>
                        <Grid item xs={3} display="flex" alignItems="center">
                          <IconButton onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>
                            <RemoveIcon />
                          </IconButton>
                          <Typography>{item.quantity}</Typography>
                          <IconButton onClick={() => handleQuantityChange(item.id, 1)}>
                            <AddIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                ))}
                <Link href="/order" passHref>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mr: 1 }} 
                    onClick={handleCheckout}
                    disabled={!cartItems.some((item) => item.selected)}
                  >
                    Checkout
                  </Button>
                </Link>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ mt: 3 }} 
                  onClick={() => handleAction('remove')}
                  disabled={!cartItems.some((item) => item.selected)}
                  startIcon={<DeleteIcon />}
                >
                  Remove Selected
                </Button>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    padding: 3, 
                    backgroundColor: '#fff',
                    border: '1px solid #e0e0e0',
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" align="center">Total: ${calculateTotal()}</Typography>
                    <Typography variant="body2" align="center">
                      Select items to update the total.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default CartPage;
