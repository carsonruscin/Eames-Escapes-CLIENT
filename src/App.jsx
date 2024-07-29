import { Container, CssBaseline } from '@mui/material'
import { LandingPage } from './components/landingPage/landingPage.jsx'
import { AppLayout } from './components/appLayout/appLayout.jsx'
import { Route, Routes } from 'react-router-dom'
import { AllProperties } from './components/allProperties/allProperties.jsx'
import { useState } from 'react'


export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <CssBaseline />
      <AppLayout isLoggedIn={isLoggedIn}>
        <Container maxWidth='100vw' sx={{padding: '0', overflow: 'hidden' }}>
          <Routes>
            <Route path="/" element={<LandingPage setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/all-properties" element={<AllProperties />}/>
          </Routes>
        </Container>
      </AppLayout>
    </>
  )
}