import { useState } from 'react'
import { Box, TextField, Button, Typography, Container } from '@mui/material'
import { API_BASE_URL } from '../../services/apiBaseUrl.jsx'
import { useNavigate } from 'react-router-dom'
import { register } from '../../services/auth.jsx'


export const RegisterPage = () => {
  const imageUrl = `${API_BASE_URL}/media/landing_page/eames-overlook.jpeg`
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({ email: "", username: "" })
  const navigate = useNavigate()

  const handleSignUp = async (event) => {
    event.preventDefault()

    const user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: username,
      password: password,
    };

    try {
      await register(user)
      navigate("/")
    } catch (error) {
      if (error.errors) {
        setErrors({
          email: error.errors.email || "",
          username: error.errors.username || "",
        })
      }
    }
  }

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xs">
        <Box
          component="form"
          onSubmit={handleSignUp}
          sx={{
            marginBottom: '150px',
            width: "100%",
            paddingBottom: "120%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{ marginBottom: "16px", color: "#faf2e6" }}
            >
              Sign Up
            </Typography>
            <TextField
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              fullWidth
              sx={{
                marginBottom: "16px",
                input: { color: "#faf2e6" },
                label: { color: "#faf2e6" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#faf2e6",
                  },
                  "&:hover fieldset": {
                    borderColor: "#faf2e6",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#faf2e6" },
              }}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              fullWidth
              sx={{
                marginBottom: "16px",
                input: { color: "#faf2e6" },
                label: { color: "#faf2e6" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#faf2e6",
                  },
                  "&:hover fieldset": {
                    borderColor: "#faf2e6",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#faf2e6" },
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              error={!!errors.email} // Show error state
              helperText={errors.email} // Display error message
              sx={{
                marginBottom: "16px",
                input: { color: "#faf2e6" },
                label: { color: "#faf2e6" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#faf2e6",
                  },
                  "&:hover fieldset": {
                    borderColor: "#faf2e6",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#faf2e6" },
              }}
            />
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              error={!!errors.username} // Show error state
              helperText={errors.username} // Display error message
              sx={{
                marginBottom: "16px",
                input: { color: "#faf2e6" },
                label: { color: "#faf2e6" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#faf2e6",
                  },
                  "&:hover fieldset": {
                    borderColor: "#faf2e6",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#faf2e6" },
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              sx={{
                marginBottom: "16px",
                input: { color: "#faf2e6" },
                label: { color: "#faf2e6" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#faf2e6",
                  },
                  "&:hover fieldset": {
                    borderColor: "#faf2e6",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#faf2e6" },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                color: "#faf2e6",
                width: "50%",
                alignSelf: "center",
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}