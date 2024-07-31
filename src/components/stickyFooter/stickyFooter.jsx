import { AppBar, Toolbar } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  top: 'auto',
  bottom: 0,
  height: '64px',
  width: '100%',
  margin: '0',
  padding: '0',
  position: 'fixed',
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.primary.main,
}))

export const StickyFooter = () => {
  return (
    <StyledAppBar>
      <Toolbar sx={{ height: '100%' }}>
      </Toolbar>
    </StyledAppBar>
  )
}