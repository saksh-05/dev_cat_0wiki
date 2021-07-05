import React, { useState } from "react";
import { Hidden, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./images/logo.svg";
import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import pinterest from "./images/icon-pinterest.svg";
import twitter from "./images/icon-twitter.svg";

const useStyles = makeStyles((theme) => ({
  logo: {
    [theme.breakpoints.up("md")]: {
      display: "inline-flex",
      width: "80%",
    },
  },
  ftricon: {
    marginTop: "3rem",
    marginBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      margin: "0",
      width: "100%",
      textAlign: "end",
    },
  },
  caption: {
    textAlign: "end",
    marginTop: "-1.2rem",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      textAlign: "center",
      marginTop: "1.5rem",
    },
  },
}));

const footer = () => {
  const [undr, setUndr] = useState(false);
  const classes = useStyles();

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
    <>
      <Box
        style={{ background: "#000000", color: "#ffffff" }}
        pb="3rem"
        pt={5}
        textAlign="center"
        fontFamily="Josefin Sans"
        fontWeight={300}
        width="100%"
      >
        <Box className={classes.logo}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "192px", height: "32px" }}
          />
          <Hidden mdUp>
            <Box fontWeight={600} mt={3}>
              <a href="#">About</a>
            </Box>
            <Box fontWeight={600} mt={3}>
              <a href="#">Carrer</a>
            </Box>
            <Box fontWeight={600} mt={3}>
              <a href="#">Event</a>
            </Box>
            <Box fontWeight={600} mt={3}>
              <a href="#">Products</a>
            </Box>
            <Box fontWeight={600} mt={3}>
              <a href="#">Support</a>
            </Box>
          </Hidden>
          <Box className={classes.ftricon}>
            <a href="/">
              <img
                src={facebook}
                alt="facebook"
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
            </a>
            <a href="/">
              <img
                src={instagram}
                alt="instagram"
                style={{
                  marginLeft: "1.5rem",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </a>
            <a href="/">
              <img
                src={pinterest}
                alt="pinterest"
                style={{
                  marginLeft: "1.5rem",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </a>
            <a href="/">
              <img
                src={twitter}
                alt="twitter"
                style={{
                  marginLeft: "1.5rem",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </a>
          </Box>
        </Box>
        <Box width="80%" mx="auto" textAlign="left">
          <Hidden smDown>
            <Box display=" inline-flex" width="61%">
              <Box fontWeight={600} mt={3}>
                <a
                  href="#"
                  onMouseEnter={changeUnderLine}
                  onMouseLeave={changeUnderLine}
                >
                  About
                </a>
              </Box>
              <Box fontWeight={600} mt={3} ml={3}>
                <a
                  href="#"
                  onMouseEnter={changeUnderLine}
                  onMouseLeave={changeUnderLine}
                >
                  Carrer
                </a>
              </Box>
              <Box fontWeight={600} mt={3} ml={3}>
                <a
                  href="#"
                  onMouseEnter={changeUnderLine}
                  onMouseLeave={changeUnderLine}
                >
                  Event
                </a>
              </Box>
              <Box fontWeight={600} mt={3} ml={3}>
                <a
                  href="#"
                  onMouseEnter={changeUnderLine}
                  onMouseLeave={changeUnderLine}
                >
                  Products
                </a>
              </Box>
              <Box fontWeight={600} mt={3} ml={3}>
                <a
                  href="#"
                  onMouseEnter={changeUnderLine}
                  onMouseLeave={changeUnderLine}
                >
                  Support
                </a>
              </Box>
            </Box>
          </Hidden>
          <Box className={classes.caption}>
            2021 loopstudios. All rights reserved
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default footer;
