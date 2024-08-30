import * as React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, Grid, AppBar, Toolbar, Box, IconButton } from '@mui/material';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
            {/* Your logo here */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Car Repair
          </Typography>
          <Button color="inherit">Shop</Button>
          <Button color="inherit">Booking</Button>
          <Button color="inherit">Cart</Button>
          <Button color="inherit">About Us</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Get total care for your car. We offer a range of services provided by skilled and ASE-certified auto technicians.
        </Typography>

        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Repair + Maintenance Services Offered:
                </Typography>
                <ul>
                  <li>Air Conditioning Repair</li>
                  <li>Engine Repair/Replacement</li>
                  <li>Brake Repair</li>
                  <li>Suspension & Steering Repair</li>
                  <li>Oil Change</li>
                  <li>Tire Rotation</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://images.unsplash.com/photo-1518059175229-8d352c916d24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80" // Replace with your image URL
                alt="Car Engine"
              />
            </Card>
          </Grid>
        </Grid>

        <Box mt={4} display="flex" justifyContent="center">
          <Button variant="contained" size="large" href="#book">
            Book a Service
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
