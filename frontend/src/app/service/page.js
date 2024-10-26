import * as React from 'react';
import { Container, Typography, Card, CardContent, Button, Grid, AppBar, Toolbar, Box, IconButton } from '@mui/material';

function App() {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/cyberpunk.jpeg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: '#ff5722' }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
            <img src="/images/aldecaldos.jpg" alt="Aldecaldos Logo" style={{ height: '40px' }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CARCARE
          </Typography>
          <Button color="inherit" sx={{ fontWeight: 'bold', fontSize: '18px' }}>Shop</Button>
          <Button color="inherit" sx={{ fontWeight: 'bold', fontSize: '18px' }}>Booking</Button>
          <Button color="inherit" sx={{ fontWeight: 'bold', fontSize: '18px' }}>Cart</Button>
          <Button color="inherit" sx={{ fontWeight: 'bold', fontSize: '18px' }}>Logout</Button> 
        </Toolbar>
      </AppBar>

      <Container
        maxWidth="lg"
        sx={{
          mt: 4,
          padding: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {/* New Image Above Aldecaldos Services Section */}
        <img src="/images/aldecaldos_title.png" alt="Service Banner" style={{ width: '100%', borderRadius: '12px', marginBottom: '16px' }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <img src="/images/aldecaldos.jpg" alt="Aldecaldos Logo" style={{ height: '200px', marginRight: '16px' }} />
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="h4" color="black" gutterBottom>
              Aldecaldos Services
            </Typography>
            <Typography variant="body1" color="black">
              Providing top-notch car repair and maintenance services by certified technicians.
            </Typography>
          </Box>
        </Box>

        <Typography variant="h4" align="center" color="black" gutterBottom sx={{ mt: 4 }}>
          Our Services
        </Typography>
        <Typography variant="h6" align="center" color="black" gutterBottom>
          Get total care for your car. We offer a range of services provided by skilled and ASE-certified auto technicians.
        </Typography>

        <Grid container spacing={4} mt={4}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" color="black" gutterBottom>
                  Repair + Maintenance Services Offered:
                </Typography>
                <ul style={{ color: 'black' }}>
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
        </Grid>

        <Box mt={4} display="flex" justifyContent="center">
          <Button variant="contained" size="large" href="bookingprocess" sx={{ fontSize: '18px' }}>
            Book a Service
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
