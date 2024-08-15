import { useState, useEffect } from 'react'
import { Container, CssBaseline } from '@mui/material'
import { LandingPage } from './components/landingPage/landingPage.jsx'
import { RegisterPage } from './components/registerPage/registerPage.jsx'
import { AppLayout } from './components/appLayout/appLayout.jsx'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import { AllProperties } from './components/allProperties/allProperties.jsx'
import { LuxuryEstates } from './components/luxuryEstates/luxuryEstates.jsx'
import { Ranches } from './components/ranches/ranches.jsx'
import { Cottages } from './components/cottages/cottages.jsx'
import { MyPropertiesPage } from './components/myPropertiesPage/myPropertiesPage.jsx'


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
            <Route path="/ranches" element={
              isLoggedIn ? <Ranches /> : <Navigate to="/" replace />
            } />
            <Route path="/cottages" element={
              isLoggedIn ? <Cottages /> : <Navigate to="/" replace />
            } />
            <Route path="/my-properties" element={
              isLoggedIn ? <MyPropertiesPage /> : <Navigate to="/" replace />
            } />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        )}
      </AppLayout>
    </>
  )
}
