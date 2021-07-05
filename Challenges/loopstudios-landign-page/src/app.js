import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  Box,
  CardMedia,
  Container,
  Button,
} from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import mhero from "./images/mobile/image-hero.jpg";
import dhero from "./images/desktop/image-hero.jpg";
import OurMedia from "./ourmedia";
import logo from "./images/logo.svg";
import Footer from "./footer";
import Intr from "./intractive";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  dtitle: {
    flexGrow: 1,
    [theme.breakpoints.between("sm", "sm")]: {
      marginLeft: "0.5rem",
    },
  },
  media: {
    height: "650px",
    width: "100%",
  },
  hero: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    boxSizing: "border-box",
    marginTop: "-600px",
    height: `700px`,
    padding: 0,
    width: "92.28%",
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
  },
  content: {
    [theme.breakpoints.up("md")]: {
      width: "80%",
      padding: 0,
    },
    [theme.breakpoints.between("sm", "sm")]: {
      width: "92.28%",
      padding: 0,
    },
  },
  herocontent: {
    [theme.breakpoints.up("md")]: {
      width: "34rem",
      fontSize: "4.8rem",
      marginTop: "8.5rem",
    },
    [theme.breakpoints.between("sm", "sm")]: {
      width: "60%",
    },
  },
  tool: {
    padding: 0,
  },
  crt: {
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      marginTop: "9rem",
      display: "inline-flex",
      width: "86.9%",
    },
    [theme.breakpoints.between("md", "md")]: {
      width: "82%",
      display: "inline-flex",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.8rem",
    },
  },
  bbtn: {
    display: "inline-flex",
    border: "2px solid black",
    borderRadius: 0,
    fontSize: "1rem",
    width: "8rem",
    height: "2rem",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "400",
    cursor: "pointer",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#616161",
    },
  },
  typography: {
    fontFamily: "Josefin Sans",
  },
  overrides: {
    MuiPaper: {
      elevation4: {
        boxShadow: "0",
      },
      root: {
        backgroundColor: "black",
      },
    },
    MuiAppBar: {
      root: {
        marginTop: "1.5em",
      },
    },
    MuiDrawer: {
      paper: {
        width: "100%",
      },
    },
    MuiButtonBase: {
      root: {
        color: "#ffffff",
      },
    },
    MuiIconButton: {
      root: {
        padding: 0,
      },
    },
    MuiToolbar: {
      gutters: {
        margin: 0,
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
});

const app = () => {
  const [open, setOpen] = useState(false);
  const [bck, setBck] = useState(false);
  const [undr, setUndr] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  const changeBackground = (e) => {
    if (!bck) {
      e.target.style.background = "black";
      e.target.style.color = "white";
      setBck(true);
    } else {
      e.target.style.background = "white";
      e.target.style.color = "black";
      setBck(false);
    }
  };

  const changeUnderLine = (e) => {
    if (!undr) {
      e.target.classList.add("hvr");
      setUndr(true);
    } else {
      e.target.classList.remove("hvr");
      setUndr(false);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Hidden smDown>
        <CardMedia className={classes.media} image={dhero} />
      </Hidden>
      <Hidden mdUp>
        <CardMedia className={classes.media} image={mhero} />
      </Hidden>
      <Container className={classes.hero}>
        <Toolbar className={classes.tool}>
          <Box className={classes.title}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "192px", height: "32px" }}
            />
          </Box>
          <Hidden smDown>
            <nav>
              <Box display=" inline-flex" width="61%">
                <Box fontWeight={600} mt={1}>
                  <a
                    href="#"
                    onMouseEnter={changeUnderLine}
                    onMouseLeave={changeUnderLine}
                  >
                    About
                  </a>
                </Box>
                <Box fontWeight={600} mt={1} ml={3}>
                  <a
                    href="#"
                    onMouseEnter={changeUnderLine}
                    onMouseLeave={changeUnderLine}
                  >
                    Carrer
                  </a>
                </Box>
                <Box fontWeight={600} mt={1} ml={3}>
                  <a
                    href="#"
                    onMouseEnter={changeUnderLine}
                    onMouseLeave={changeUnderLine}
                  >
                    Event
                  </a>
                </Box>
                <Box fontWeight={600} mt={1} ml={3}>
                  <a
                    href="#"
                    onMouseEnter={changeUnderLine}
                    onMouseLeave={changeUnderLine}
                  >
                    Products
                  </a>
                </Box>
                <Box fontWeight={600} mt={1} ml={3}>
                  <a
                    href="#"
                    onMouseEnter={changeUnderLine}
                    onMouseLeave={changeUnderLine}
                  >
                    Support
                  </a>
                </Box>
              </Box>
            </nav>
          </Hidden>

          <Hidden mdUp>
            <IconButton color="primary" aria-label="menu" onClick={handleClick}>
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={open} onClose={handleClick}>
              <div onKeyDown={handleClick} onClick={handleClick}>
                <AppBar position="relative" color="transparent">
                  <Toolbar>
                    <Box className={classes.dtitle} ml={3}>
                      <img
                        src={logo}
                        alt="logo"
                        style={{ width: "192px", height: "32px" }}
                      />
                    </Box>
                    <IconButton
                      className={classes.menuButton}
                      color="primary"
                      aria-label="menu"
                      onClick={handleClick}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Toolbar>
                </AppBar>
                <Typography
                  component="div"
                  color="primary"
                  variant="h3"
                  style={{ marginTop: "7rem" }}
                >
                  <Box
                    display="block"
                    component="a"
                    href="#"
                    fontWeight="100"
                    ml="2.1rem"
                  >
                    About
                  </Box>
                  <Box
                    display="block"
                    component="a"
                    href="#"
                    fontWeight="100"
                    ml="2.1rem"
                  >
                    Carrer
                  </Box>
                  <Box
                    display="block"
                    component="a"
                    href="#"
                    fontWeight="100"
                    ml="2.1rem"
                  >
                    Events
                  </Box>
                  <Box
                    display="block"
                    component="a"
                    href="#"
                    fontWeight="100"
                    ml="2.1rem"
                  >
                    Products
                  </Box>
                  <Box
                    display="block"
                    component="a"
                    href="#"
                    fontWeight="100"
                    ml="2.1rem"
                  >
                    Support
                  </Box>
                </Typography>
              </div>
            </Drawer>
          </Hidden>
        </Toolbar>
        <Box
          component="header"
          border={2}
          borderColor="white"
          color="white"
          fontFamily="Josefin Sans"
          fontSize="3.5rem"
          mt="2.8em"
          pl="2.8rem"
          textAlign="left"
          className={classes.herocontent}
        >
          Immersive Experiences That Deliver
        </Box>
      </Container>
      <Container className={classes.content}>
        <Intr />
        <Box
          component="header"
          mt="6rem"
          textAlign="center"
          fontSize="3rem"
          className={classes.crt}
        >
          OUR CREATIONS
        </Box>
        <Hidden smDown>
          <Box
            className={classes.bbtn}
            onMouseEnter={changeBackground}
            onMouseLeave={changeBackground}
          >
            See All
          </Box>
        </Hidden>
        <Box mt="2rem" mb="5rem">
          <OurMedia />
        </Box>
      </Container>

      <Footer />
    </ThemeProvider>
  );
};

export default app;
