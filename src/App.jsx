import { useState, useEffect } from 'react'
import { Container, CssBaseline } from '@mui/material'
import { LandingPage } from './components/landingPage/landingPage.jsx'
import { AppLayout } from './components/appLayout/appLayout.jsx'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AllProperties } from './components/allProperties/allProperties.jsx'


export const App = () => {
  // Initialize isLoggedIn state from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true'
  })

  // Update localStorage whenever isLoggedIn changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn.toString())
  }, [isLoggedIn])

  return (
    <>
      <CssBaseline />
      <AppLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
        <Container maxWidth='100vw' sx={{padding: '0', overflow: 'hidden' }}>
          <Routes>
            {/* Redirect to all-properties if logged in, otherwise show LandingPage */}
            <Route path="/" element={
              isLoggedIn ? <Navigate to="/all-properties" replace /> : <LandingPage setIsLoggedIn={setIsLoggedIn} />
            } />
            {/* Show AllProperties if logged in, otherwise redirect to landing page */}
            <Route path="/all-properties" element={
              isLoggedIn ? <AllProperties /> : <Navigate to="/" replace />
            } />
          </Routes>
        </Container>
      </AppLayout>
    </>
  )
}
