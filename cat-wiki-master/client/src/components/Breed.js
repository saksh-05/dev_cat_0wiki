import React, { useState } from "react";
import {
  Box,
  Breadcrumbs,
  Card,
  createTheme,
  Grid,
  Typography,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    marginBottom: "2rem",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  img: {
    [theme.breakpoints.down("md")]: {
      margin: "auto",
    },
  },
  description: {
    marginLeft: "4rem",
    width: "65%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
      width: "75%",
      marginLeft: "3rem",
    },
    
  },
}));

const theme = createTheme({
  overrides: {
    MuiTypography: {
      body1: {
        fontWeight: "500",
      },
    },
    MuiPaginationItem: {
      root: {
        minWidth: "30px",
      },
    },
  },
  breakpoints: {
    values: {
      xss:0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const Breed = ({ data }) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  console.log(data);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Typography color="textPrimary">Breeds</Typography>
        </Breadcrumbs>
        <Box fontSize="2rem" fontWeight="700" my={5}>
          Top 10 most searched breeds
        </Box>
        <Grid>
          {data.slice((page - 1) * 10, page * 10).map((dt, index) => {
            return (
              <Grid key={index} className={classes.root}>
                <Card
                  className={classes.img}
                  style={{
                    width: "18rem",
                    height: "16rem",
                    borderRadius: "50px",
                  }}
                >
                  <img
                    src={dt.image.url}
                    alt={dt.name}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Card>
                <Box className={classes.description}>
                  <Link
                    to={{
                      pathname: "/preview",
                      params: { dt },
                    }}
                  >
                    <Box fontSize="2rem" fontWeight="500">
                      {(page - 1) * 10 + index + 1 + ". "} {dt.name}
                    </Box>
                  </Link>
                  <Box
                    fontWeight="500"
                    lineHeight="1.5rem"
                    style={{ marginTop: "2rem", marginBottom: "2rem" }}
                  >
                    {dt.description}
                  </Box>
                  {console.log(dt)}
                  {console.log(index)}
                </Box>
              </Grid>
            );
          })}
          <Pagination
            count={
              data.length % 10 === 0
                ? parseInt(data.length / 10)
                : parseInt(data.length / 10 + 1)
            }
            page={page}
            onChange={(event, val) => setPage(val)}
            style={{ marginBottom: "1rem" }}
          />
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Breed;
