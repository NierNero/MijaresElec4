'use client';
import React, { useEffect } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, Grid, AppBar, Toolbar, Link, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const repairShops = [
  {
    name: 'Samurai Repair Shop',
    description: 'Expert repairs with quality service.',
    imageUrl: '/images/samurai.jpg',
  },
  {
    name: 'SilverHand Repair Shop',
    description: 'Best for quick fixes and quality repairs.',
    imageUrl: '/images/silverhand.jpg',
  },
  {
    name: 'Aldecaldos Repair Shop',
    description: 'We take care of your car like it’s our own.',
    imageUrl: '/images/aldecaldos.jpg',
  },
  {
    name: 'Smasher Repair Shop',
    description: 'Efficient, reliable, and quick repair services.',
    imageUrl: '/images/smasher.jpg',
  },
  {
    name: 'Arasaka Repair Shop',
    description: 'Premium car care and repair services.',
    imageUrl: '/images/arasaka.jpg',
  },
];

const RepairShopCard = ({ shop }) => (
  <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', boxShadow: 3, borderRadius: 2 }}>
    <CardMedia
      component="img"
      height="250"
      image={shop.imageUrl}
      alt={shop.name}
    />
    <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#ff5722', mb: 1 }}>
        {shop.name}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        {shop.description}
      </Typography>
    </CardContent>
    <Box sx={{ padding: 2 }}>
      <Button variant="contained" color="primary" fullWidth sx={{ backgroundColor: '#ff5722', fontWeight: 'bold', padding: 1.5 }}>
        Visit Now
      </Button>
    </Box>
  </Card>
);

export default function Dashboard() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: 'url(/images/cyberpunk.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: 'rgba(255, 87, 34, 0.8)', height: '80px' }}>
        <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '24px', color: '#fff', fontFamily: 'Orbitron, sans-serif' }}>
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

      <Container sx={{ mt: 4, zIndex: 1 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#ff5722', fontFamily: 'Orbitron, sans-serif' }}>
          Available Repair Shops
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {repairShops.map((shop, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <RepairShopCard shop={shop} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
