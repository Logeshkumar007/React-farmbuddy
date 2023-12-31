import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import '../Styles/navbar.css'
// import Translate from './translate'
import PropTypes from 'prop-types'
import logo from '/images/logo-white-transparent.png'

const theme = createTheme({
  palette: {
    primary: {
      main: '#004B49',
      darker: '#053e85',
    },
    secondary: {
      main: '#32CD32',
      darker: '#1b5e20',
    },
  },
})

const Navbar = ({children}) => {
  const pages = [
    { name: 'CONSUMER', path: '/consumer' },
    { name: 'SERVICES', path: '/services' },
    { name: 'ABOUT', path: '/about' },
    { name: 'FARMER', path: '/farmer' },
  ]
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [navbar, setNavbar] = React.useState(false)

  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 40) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar
          color="primary"
          className={navbar ? 'navbar' : 'navbar  active'}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                component="a"
                href="/"
                sx={{
                  mr: 1,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  marginY: '10px',
                }}
              >
                <img src={logo} alt="Logo" width="75rem" />
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <Link to={page.path} key={page.name}>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.name}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>
              <AgricultureIcon
                sx={{ display: { xs: 'flex', md: 'none' }, mr: 0 }}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                FARMBUDDY
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: 'white',
                        display: 'block',
                        marginLeft: '30px',
                        ':hover': {
                          bgcolor: '#0BDE00',
                          color: 'black',
                        },
                      }}
                    >
                      {page.name}
                    </Button>
                  </Link>
                ))}
                {/* <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    marginLeft: '30px',
                    ':hover': {
                      bgcolor: '#0BDE00',
                      color: 'black',
                    },
                  }}
                  href="https://pavithran1.my.canva.site/"
                >
                  {' '}
                  FARMER
                </Button> */}
                <Container
                  sx={{
                    my: 2,
                    mx: 2,
                    color: 'white',
                    display: 'block',
                  }}
                >
                  {/* <Translate /> */}
                  {children}
                </Container>
                <div
                  style={{
                    display: 'flex',
                    // marginLeft: '550px',
                    alignmentBaseline: 'center',
                  }}
                >
                  <IconButton size="large">
                    <Link to="/mycart">
                      <ShoppingCartIcon color="secondary" />
                    </Link>
                  </IconButton>
                </div>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Agriculture"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  )
}

Navbar.propTypes = {
  children: PropTypes.element.isRequired, // if you expect a single child of any type
}

export default Navbar