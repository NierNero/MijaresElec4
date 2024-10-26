'use client';
import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Paper, Button, TextField, AppBar, Toolbar, Link, Box, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FavoriteIcon from '@mui/icons-material/Favorite';

const App = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#ff5722', marginBottom: 4, height: '80px' }}>
        <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '24px', fontFamily: 'Orbitron, sans-serif' }}>
            CARCARE
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" color="inherit" sx={{ marginRight: 2, fontWeight: 'bold', fontSize: '18px' }}>Home</Link>
            <Link href="/cart" color="inherit" sx={{ marginRight: 2, fontWeight: 'bold', fontSize: '18px' }}>Cart</Link>
            <Link href="/book" color="inherit" sx={{ marginRight: 2, fontWeight: 'bold', fontSize: '18px' }}>Book</Link>
            <Link href="/login" color="inherit" sx={{ fontWeight: 'bold', fontSize: '18px' }}>Logout</Link>
            <Link href="/profile" sx={{ color: 'inherit', marginLeft: 2 }} aria-label="Profile">
              <AccountCircleIcon sx={{ fontSize: 30 }} /> {/* Profile icon */}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default function Profile() {
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    avatar: 'https://via.placeholder.com/150',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
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
      <App />
      <Container
        sx={{
          maxWidth: '900px',
          padding: '20px',
          marginBottom: '40px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)', 
          borderRadius: '12px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Grid container spacing={3} sx={{ marginBottom: 4 }}>
          <Grid item xs={12} md={3} textAlign="center">
            <Avatar
              src={"/images/person1.jpg"}
              alt="User Avatar"
              sx={{ width: 270, height: 300, marginBottom: 2,}}
              
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
              {user.firstName} {user.lastName}
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Paper elevation={3} sx={{ padding: '20px', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: 'bold', color: '#ff5722', marginBottom: 2 }}
              >
                Personal Information
              </Typography>
              {isEditing ? (
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="First Name"
                      name="firstName"
                      value={user.firstName}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Last Name"
                      name="lastName"
                      value={user.lastName}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      name="email"
                      value={user.email}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Phone"
                      name="phone"
                      value={user.phone}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Address"
                      name="address"
                      value={user.address}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              ) : (
                <>
                  <Typography variant="body1" sx={{ marginBottom: 1 }}>
                    <strong>First Name:</strong> {user.firstName}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: 1 }}>
                    <strong>Last Name:</strong> {user.lastName}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: 1 }}>
                    <strong>Email:</strong> {user.email}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: 1 }}>
                    <strong>Phone:</strong> {user.phone}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: 1 }}>
                    <strong>Address:</strong> {user.address}
                  </Typography>
                </>
              )}

              <Box textAlign="center" sx={{ marginTop: 3 }}>
                <Button
                  variant="contained"
                  color={isEditing ? 'primary' : 'warning'}
                  onClick={toggleEditMode}
                  sx={{ padding: '8px 30px' }}
                  startIcon={isEditing ? <SaveIcon /> : <EditIcon />}
                >
                  {isEditing ? 'Save' : 'Edit'}
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Shopee-like Navigation Links */}
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={3} textAlign="center">
            <Button
              variant="outlined"
              fullWidth
              sx={{
                padding: '15px',
                borderRadius: '12px',
                backgroundColor: '#fff',
                borderColor: '#ff5722',
                color: '#ff5722',
                fontWeight: 'bold',
              }}
              startIcon={<ShoppingCartIcon />}
              href="/cart"
            >
              My Orders
            </Button>
          </Grid>
          <Grid item xs={12} sm={3} textAlign="center">
            <Button
              variant="outlined"
              fullWidth
              sx={{
                padding: '15px',
                borderRadius: '12px',
                backgroundColor: '#fff',
                borderColor: '#ff5722',
                color: '#ff5722',
                fontWeight: 'bold',
              }}
              startIcon={<FavoriteIcon />}
              href="/wishlist"
            >
              Wishlist
            </Button>
          </Grid>
          <Grid item xs={12} sm={3} textAlign="center">
            <Button
              variant="outlined"
              fullWidth
              sx={{
                padding: '15px',
                borderRadius: '12px',
                backgroundColor: '#fff',
                borderColor: '#ff5722',
                color: '#ff5722',
                fontWeight: 'bold',
              }}
              startIcon={<AccountCircleIcon />}
              href="/account-settings"
            >
              Account Settings
            </Button>
          </Grid>
          <Grid item xs={12} sm={3} textAlign="center">
            <Button
              variant="outlined"
              fullWidth
              sx={{
                padding: '15px',
                borderRadius: '12px',
                backgroundColor: '#fff',
                borderColor: '#ff5722',
                color: '#ff5722',
                fontWeight: 'bold',
              }}
              startIcon={<ExitToAppIcon />}
              href="/login"
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
