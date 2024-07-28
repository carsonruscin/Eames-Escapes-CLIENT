import { Container, CssBaseline } from '@mui/material'
import { LandingPage } from './components/landingPage/landingPage.jsx'
import { AppLayout } from './components/appLayout/appLayout.jsx'
import { Route, Routes } from 'react-router-dom'


export const App = () => {

  return (
    <>
      <CssBaseline />
      <AppLayout>
        <Container maxWidth='100vw' sx={{padding: '0',}}>
          <Routes>
            <Route path="/" element={<LandingPage />}/> 
          </Routes>
        </Container>
      </AppLayout>
    </>
  )
}