import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, Grid, AppBar, Toolbar, Link, Box } from '@mui/material';

// Mock data for the repair shops
const repairShops = [
  {
    name: 'Luisse Mijares Repair Shop',
    description: 'Very Bagil na Badlongon. Malaki Gamay! Hahahaha!',
    imageUrl: '/images/.jpg',
  },
  {
    name: 'Ryan Suazo Repair Shop',
    description: 'Very Bagil na Badlongon. Malaki Gamay! Hahahaha!',
    imageUrl: 'url-to-ryan-image',
  },
  {
    name: 'Charles Arvin D. Deticio',
    description: 'Very Bagil na Badlongon. Malaki Gamay! Hahahaha!',
    imageUrl: 'url-to-charles-image',
  },
  {
    name: 'James Andre B. Crispe',
    description: 'Very Bagil na Badlongon. Malaki Gamay! Hahahaha!',
    imageUrl: 'url-to-james-image',
  },
  {
    name: 'Reyzl Tom B. Flores',
    description: 'Very Bagil na Badlongon. Malaki Gamay! Hahahaha!',
    imageUrl: 'url-to-reyzl-image',
  },
];

const App = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CARCARE
          </Typography>
          <Link href="/" color="inherit" sx={{ marginRight: 2 }}>Home</Link>
          <Link href="/cart" color="inherit" sx={{ marginRight: 2 }}>Cart</Link>
          <Link href="/book" color="inherit" sx={{ marginRight: 2 }}>Book</Link>
          <Link href="/login" color="inherit">Logout</Link>
        </Toolbar>
      </AppBar>

      <Container>
        <Typography variant="h4" align="center" gutterBottom sx={{ marginTop: 4 }}>
          Available Repair Shops
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {repairShops.map((shop, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <RepairShopCard shop={shop} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

const RepairShopCard = ({ shop }) => (
  <Card sx={{ height: '39vh', display: 'flex', flexDirection: 'column' }}>
    <CardMedia
      component="img"
      height="100"
      image={shop.imageUrl}
      alt={shop.name}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant="h6" component="div">
        {shop.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {shop.description}
      </Typography>
    </CardContent>
    <Box sx={{ padding: 2 }}>
      <Button variant="contained" color="primary" fullWidth>
        Visit Now
      </Button>
    </Box>
  </Card>
);

export default App;
