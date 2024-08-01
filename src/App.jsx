import { useState, useEffect } from 'react'
import { Container, CssBaseline } from '@mui/material'
import { LandingPage } from './components/landingPage/landingPage.jsx'
import { AppLayout } from './components/appLayout/appLayout.jsx'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import { AllProperties } from './components/allProperties/allProperties.jsx'
import { LuxuryEstates } from './components/luxuryEstates/luxuryEstates.jsx'


export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true'
  })

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn.toString())
  }, [isLoggedIn])

  const location = useLocation()
  const isLandingPage = location.pathname === '/' && !isLoggedIn

  return (
    <>
      <CssBaseline />
      <AppLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
        {isLandingPage ? (
          <Container maxWidth='100vw' sx={{padding: '0', overflow: 'hidden' }}>
            <LandingPage setIsLoggedIn={setIsLoggedIn} />
          </Container>
        ) : (
          <Routes>
            <Route path="/" element={<Navigate to="/all-properties" replace />} />
            <Route path="/all-properties" element={
              isLoggedIn ? <AllProperties /> : <Navigate to="/" replace />
            } />
            <Route path="/luxury-estates" element={
              isLoggedIn ? <LuxuryEstates /> : <Navigate to="/" replace />
            } />
          </Routes>
        )}
      </AppLayout>
    </>
  )
}
