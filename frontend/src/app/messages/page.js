'use client';
import React, { useState } from 'react';
import { Container, List, ListItem, ListItemText, Typography, TextField, Button, Paper, Card, CardContent, AppBar, Toolbar, Link, Box, Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const App = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#ff5722', marginBottom: 4, height: '80px' }}>
      <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '24px' }}>
          CARCARE
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/" color="inherit" sx={{ marginRight: 2, fontWeight: 'bold', fontSize: '18px' }}>
            Home
          </Link>
          <Link href="/cart" color="inherit" sx={{ marginRight: 2, fontWeight: 'bold', fontSize: '18px' }}>
            Cart
          </Link>
          <Link href="/book" color="inherit" sx={{ marginRight: 2, fontWeight: 'bold', fontSize: '18px' }}>
            Book
          </Link>
          <Link href="/login" color="inherit" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
            Logout
          </Link>
          <Link href="/profile" sx={{ color: 'inherit', marginLeft: 2 }} aria-label="Profile">
            <AccountCircleIcon sx={{ fontSize: 30 }} />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const Messages = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Panam', text: 'Hey How can I help you?' },
    { id: 2, sender: 'Viktor', text: 'Need help with your car?' },
    { id: 3, sender: 'Johnny', text: 'What seems to be the problem?' },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [chatView, setChatView] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const newMsg = {
      id: chatMessages.length + 1,
      sender: 'You',
      text: newMessage,
    };

    setChatMessages([...chatMessages, newMsg]);
    setNewMessage('');

    setTimeout(() => {
      const reply = {
        id: chatMessages.length + 2,
        sender: 'Seller',
        text: `This is a reply from Seller.`,
      };
      setChatMessages((prevMessages) => [...prevMessages, reply]);
    }, 1000);
  };

  const handleViewChat = (messageId) => {
    const chat = messages.find((msg) => msg.id === messageId);
    setChatView(chat);
    setChatMessages([chat]);
  };

  return (
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
      <App />
      <Container
        sx={{
          padding: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#ff5722' }}>
          Messages
        </Typography>

        <Grid container spacing={2}>
          {/* Message list on the left */}
          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ borderRadius: '12px', maxHeight: '60vh', overflowY: 'auto' }}>
              <CardContent>
                <List>
                  {messages.map((message) => (
                    <ListItem
                      key={message.id}
                      button
                      onClick={() => handleViewChat(message.id)}
                      sx={{
                        '&:hover': {
                          backgroundColor: 'lightblue',
                        },
                      }}
                    >
                      <ListItemText primary={message.sender} secondary={message.text} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Chat view on the right */}
          <Grid item xs={12} md={8}>
            {chatView ? (
              <>
                <Paper
                  sx={{
                    padding: 2,
                    marginBottom: 2,
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 0, 0, 0.1)', // faint red
                    maxHeight: '50vh',
                    overflowY: 'auto',
                  }}
                >
                  <List>
                    {chatMessages.map((msg, index) => (
                      <ListItem key={index} sx={{ justifyContent: msg.sender === 'You' ? 'flex-end' : 'flex-start' }}>
                        <Paper
                          sx={{
                            backgroundColor: msg.sender === 'You' ? 'rgba(0, 0, 255, 0.5)' : 'rgba(255, 215, 0, 0.5)', // faint blue for user, faint gold for seller
                            color: 'white',
                            padding: '10px',
                            borderRadius: '10px',
                            maxWidth: '70%',
                          }}
                        >
                          <Typography variant="body1">{msg.text}</Typography>
                        </Paper>
                      </ListItem>
                    ))}
                  </List>
                </Paper>

                <Paper elevation={3} sx={{ padding: 2, marginTop: 2, borderRadius: '12px' }}>
                  <TextField
                    fullWidth
                    label="Type a message"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    variant="outlined"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSendMessage}
                    sx={{ marginTop: 1 }}
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Paper>
              </>
            ) : (
              <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 4 }}>
                Select a conversation to start chatting.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Messages;
