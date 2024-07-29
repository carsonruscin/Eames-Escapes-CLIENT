import { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { API_BASE_URL } from '../../services/apiBaseUrl.jsx';
import { useNavigate, useLocation } from 'react-router-dom';
import { login } from '../../services/auth.jsx';

export const LandingPage = ({ setIsLoggedIn }) => {
    const imageUrl = `${API_BASE_URL}/media/landing_page/test-landing-page-image-wide.jpg`;
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    // Redirect to all-properties if user is already logged in
    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            navigate('/all-properties');
        }
    }, [navigate]);

    const handleSignIn = async (event) => {
      event.preventDefault();
      try {
        const user = { username, password };
        const response = await login(user);
        if (response && response.token) {
          // Store token and set logged in state
          localStorage.setItem('token', response.token);
          localStorage.setItem('isLoggedIn', 'true');
          setIsLoggedIn(true);
          // Navigate to all-properties, replacing the current history entry
          navigate('/all-properties', { replace: true });
        } else {
          console.error('Login failed: no token received')
        }
      } catch (error) {
        console.error('Login failed:', error);
      }
    };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={handleSignIn}
        style={{
          width: '300px',
          padding: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: '16px', color: 'white' }}>Sign In</Typography>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          sx={{ marginBottom: '16px', input: { color: 'white' }, label: { color: 'white' } }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '16px', input: { color: 'white' }, label: { color: 'white' } }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign In
        </Button>
      </form>
    </Box>
  );
};
