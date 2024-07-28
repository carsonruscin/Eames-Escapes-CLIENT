import { Container, CssBaseline } from '@mui/material'
import { LandingPage } from './components/landingPage/landingPage.jsx'

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='false'>
        <LandingPage />
      </Container>
    </>
  )
}