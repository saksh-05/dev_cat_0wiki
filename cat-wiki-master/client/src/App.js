import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import logo from "./resources/CatwikiLogo.svg";
import footerLogo from "./resources/HeroLogo.svg";
import Homepage from "./components/Homepage";
import axios from "axios";
import Preview from "./components/Preview";
import { Route, Switch } from "react-router-dom";
import Breed from "./components/Breed";

const useStyles = makeStyles(() => ({
  search: {
    border: "1.5px solid black",
    borderRadius: "0.5rem",
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "Noto Sans JP",
    color: "Gray",
    height: "2.5rem",
    width: " 18rem",
    marginLeft: "2rem",
    padding: "10px",
  },
  btn: {
    fontFamily: "Noto Sans JP",
    fontWeight: "600",
    background: "#3DB46D",
    color: "white",
    height: "2.5rem",
    width: "7rem",
    fontSize: "0.8rem",
  },
  footer: {
    background: "black",
    borderRadius: "0.5rem 0.5rem 0 0",
    display: "inline-flex",
    width: "100%",
    height: "5rem",
    alignItems: "center",
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      display: "block",
      height: "9rem",
      padding:'1rem',
    },
  },
  footerContent: {
    color: "white",
    flex: "1",
    textAlign: "end",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

const theme = createTheme({
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        transition: "none",
        "&:hover": {
          backgroundColor: "#3DB46D",
        },
      },
    },
  },
});

const App = () => {
  const [val, setVal] = useState([]);

  const classes = useStyles();

  const getVal = async () => {
    await axios
      .get(
        "https://api.thecatapi.com/v1/breeds?api_key=47bba2ab-5f72-4a13-bf04-3645158c8d9d"
      )
      .then((response) => {
        setVal(
          response.data[0] !== undefined
            ? response.data.filter(
                (dt) =>
                  dt.image !== undefined && dt.id !== "pers" && dt !== undefined
              )
            : []
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getVal();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container style={{ width: "90%", marginTop: "2rem", padding: "0" }}>
        <img src={logo} alt="logo" />
        <Switch>
          <Route path="/preview" component={Preview} />
          <Route path="/breed">
            {" "}
            <Breed data={val} />
          </Route>
          <Route path="/">
            {" "}
            <Homepage data={val} />
          </Route>
        </Switch>
        <Grid className={classes.footer}>
          <img src={footerLogo} alt="logo" width="144px" height="48px" />
          <Typography className={classes.footerContent}>
            Created by Saurabh- devChallenge.io 2021
          </Typography>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
