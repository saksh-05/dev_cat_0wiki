import React, { useState } from "react";
import { Hidden, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import minteractive from "./images/mobile/image-interactive.jpg";
import dinteractive from "./images/desktop/image-interactive.jpg";

const useStyles = makeStyles((theme) => ({
  interact: {
    width: "100%",
    [theme.breakpoints.between("md", "lg")]: {
      width: "60%",
      height: "386px",
      padding: 0,
    },
  },
  intact: {
    [theme.breakpoints.up("md")]: {
      display: "inline-flex",
      padding: 0,
      margin: "0",
      width: "92.8%",
    },
  },
  intcont: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      width: "45%",
      background: "white",
      transform: "translateX(80%)",
      marginTop: "6.8rem",
    },
    [theme.breakpoints.between("md", "md")]: {
      transform: "translate(70%)",
    },
  },
  inthead: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "4rem",
      textAlign: "left",
      fontSize: "2.8rem",
    },
    [theme.breakpoints.between("sm", "sm")]: {
      fontSize: "2.8rem",
    },
  },
  intsubhead: {
    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
      paddingLeft: "4rem",
      textAlign: "left",
      lineHeight: "1.5rem",
    },
  },
  crt: {
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      marginTop: "9rem",
      display: "inline-flex",
      width: "100%",
    },
  },
  btn: {
    width: "10rem",
    border: "2px solid black",
    borderRadius: 0,
    marginTop: "-1rem",
  },
  bbtn: {
    width: "60%",
    textAlign: "end",
    [theme.breakpoints.between("sm", "md")]: {
      width: "55%",
    },
  },
}));

const app = () => {
  const classes = useStyles();

  return (
    <>
      <Box mt="6rem" className={classes.intact}>
        <Hidden xsDown>
          <img alt="man" src={dinteractive} className={classes.interact} />
        </Hidden>
        <Hidden smUp>
          <img alt="man" src={minteractive} className={classes.interact} />
        </Hidden>
        <Box className={classes.intcont}>
          <Box
            component="header"
            fontFamily="Josefin Sans"
            fontSize="2.5rem"
            textAlign="center"
            mt="3rem"
            className={classes.inthead}
          >
            THE LEADER IN INTERACTIVE VR
          </Box>
          <Box
            mt="1rem"
            textAlign="center"
            fontFamily="Josefin Sans"
            fontWeight="400"
            fontSize="1.3rem"
            lineHeight="2rem"
            mb="2rem"
            className={classes.intsubhead}
          >
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default app;
