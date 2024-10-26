'use client';
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button, Snackbar, Modal, Box, AppBar, Toolbar, Link } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const products = [
  { id: 1, name: 'Brakes', description: 'High-performance brake discs.', price: '$10', image: '/images/brake.jpg' },
  { id: 2, name: 'Motor Oil', description: 'Synthetic oil for high-performance engines.', price: '$20', image: '/images/oil.png' },
  { id: 3, name: 'Battery', description: 'Battery of high capacity for vehicles.', price: '$30', image: '/images/battery.png' },
  { id: 4, name: 'Air Filter', description: 'High efficiency replacement air filter.', price: '$40', image: '/images/airfilter.jpg' },
];

const Shop = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartSnackbar, setCartSnackbar] = useState(false);

  const handleAddToCart = (event) => {
    event.stopPropagation();
    setOpenSnackbar(true);
  };

  const handleAddToCartModal = () => {
    setCartSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
    setCartSnackbar(false);
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null);
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
      <AppBar position="static" sx={{ backgroundColor: '#FF5733' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CARCARE
          </Typography>
          <Link href="/" color="inherit" sx={{ marginRight: 2 }}>Home</Link>
          <Link href="/cart" color="inherit" sx={{ marginRight: 2 }}>Cart</Link>
          <Link href="/book" color="inherit" sx={{ marginRight: 2 }}>Book</Link>
          <Link href="/login" color="inherit" sx={{ marginRight: 2 }}>Logout</Link>
          <Link href="/profile" color="inherit" aria-label="Profile">
            <AccountCircleIcon sx={{ fontSize: 30 }} />
          </Link>
        </Toolbar>
      </AppBar>

      <Container
        sx={{
          padding: 3,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src="/images/aldecaldos_title.png" alt="Aldecaldos Repair Shop" style={{ width: '100%', marginBottom: '20px' }} />
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  boxShadow: 3,
                }}
                onClick={() => handleOpenModal(product)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    Price: {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, width: '100%' }}
                    onClick={handleAddToCart}
                  >
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          message="Added to cart"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          ContentProps={{
            sx: {
              bgcolor: 'primary.main',
              color: 'white',
              padding: '16px',
              borderRadius: '8px',
              fontSize: '1.2rem',
            },
          }}
        />

        <Snackbar
          open={cartSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          message="Product added to cart"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          ContentProps={{
            sx: {
              bgcolor: 'primary.main',
              color: 'white',
              padding: '16px',
              borderRadius: '8px',
              fontSize: '1.2rem',
            },
          }}
        />

        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="product-modal-title"
          aria-describedby="product-modal-description"
        >
          <Box
            sx={{
              bgcolor: 'rgba(0, 0, 0, 0.8)', 
              boxShadow: 24,
              p: 4,
              borderRadius: '8px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              color: 'white', 
            }}
          >
            {selectedProduct && (
              <>
                <Typography
                  id="product-modal-title"
                  variant="h6"
                  component="h2"
                >
                  {selectedProduct.name}
                </Typography>
                <Typography
                  id="product-modal-description"
                  sx={{ mt: 2 }}
                >
                  {selectedProduct.description}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Price: {selectedProduct.price}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Seller location: Arroyo, Badlands
                </Typography>
                <CardMedia
                  component="img"
                  height="140"
                  image={selectedProduct.image}
                  alt={selectedProduct.name}
                  sx={{ mt: 2 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2, width: '100%' }}
                  onClick={handleAddToCartModal}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 2, width: '100%' }}
                  onClick={handleCloseModal}
                >
                  Buy Now
                </Button>
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default Shop;
