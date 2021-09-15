import React from "react";
import dhero from "../resources/heroD.png";
import mhero from "../resources/heroM.png";
import {
  TextField,
  Card,
  makeStyles,
  Typography,
  CardMedia,
  CardContent,
  ThemeProvider,
  createTheme,
  ImageList,
  ImageListItem,
  Hidden,
} from "@material-ui/core";
import { Autocomplete, Skeleton } from "@material-ui/lab";
import logo from "../resources/HeroLogo.svg";
import one from "../resources/image 1.png";
import two from "../resources/image 2.png";
import three from "../resources/image 3.png";
import { Link,useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  hero: {
    borderRadius: "3rem 3rem 0 0",
    height: "30rem",
    width: "100%",
    display: "inline-flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "15rem",
    },
  },
  media: {
    width: "100%",
    height: "100%",
  },
  content: {
    width: "90%",
    paddingRight: "4rem",
    position: "absolute",
    paddingLeft: "4rem",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "1rem",
      paddingRight: "0",
    },
  },
  text: {
    color: "white",
    fontWeight: "400",
    fontSize: "1rem",
  },
  search: {
    width: "20rem",
    [theme.breakpoints.down("md")]: {
      width: "10rem",
    },
  },
  heroBreed: {
    height: "35rem",
    width: "100%",
    borderRadius: "0 0 3rem 3rem",
    background: "#E3E1DC",
    [theme.breakpoints.down("sm")]: {
      height: "40rem",
    },
  },
  heroReason: {
    height: "35rem",
    width: "100%",
    boxShadow: "unset",
    marginTop: "2px",
    display: "inline-flex",
    padding: "4rem",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
      display: "block",
      height: "49rem",
    },
  },
  mediaOne: {
    width: "11rem",
    height: "16rem",
    position: "absolute",
    right: "23.5rem",
    top: "85rem",
    [theme.breakpoints.down("sm")]: {
      top: "93rem",
      right: "9.5rem",
      width: "7.5rem",
      height: "11rem",
    },
  },
  mediaTwo: {
    width: "17rem",
    height: "10rem",
    position: "absolute",
    right: "23.5rem",
    [theme.breakpoints.down("sm")]: {
      right: "9.5rem",
      width: "11.7rem",
      height: "7rem",
    },
  },
  mediaThree: {
    width: "15rem",
    height: "24rem",
    position: "absolute",
    right: "7.6rem",
    [theme.breakpoints.down("sm")]: {
      right: "1.2rem",
      width: "8rem",
      height: "13rem",
    },
  },
  breedImage: {
    top: "0",
    position: "unset",
    width: "15rem",
    height: "12rem",
    transform: "none",
    borderRadius: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      width: "8rem",
      height: "9rem",
    },
  },
  breedName: {
    fontFamily: "Montserrat",
    fontWeight: "600",
    color: "#291507",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  seemoreHeading: {
    width: "31rem",
    fontSize: "3rem",
    marginTop: "4rem",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      width: "12rem",
    },
  },
  seemore: {
    fontWeight: "500",
    lineHeight: "0.8rem",
    marginTop: "1rem",
    display: "inline-flex",
    flex: "1",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: "3rem",
    opacity: "60%",
    paddingRight: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1.5rem",
      position: "relative",
      top: "28rem",
    },
  },
  imageList: {
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  loadingImageList: {
    width: "15rem!important",
    height: "12rem!important",
    marginRight: "0.8rem!important",
    padding: "0!important",
    [theme.breakpoints.down("sm")]: {
      width: "40%!important",
      height: "9rem!important",
      marginBottom: "1rem!important",
      marginRight: "1.5rem!important",
    },
  },
  imagelistitem: {
    height: "auto !important",
    padding: "0!important",
    width: "auto!important",
    paddingRight: "0.8rem!important",
    cursor: "pointer",
    paddingBottom: "1rem!important",
    [theme.breakpoints.down("sm")]: {
      width: "50%!important",
    },
  },
  divStyle: {
    display: "ininle-flex",
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "block",
    },
  },
  sectionbContent: {
    paddingLeft: "0",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  sectionbH1: {
    width: "30rem",
    fontSize: "3rem",
    marginTop: "4rem",
    fontWeight: "700",
    color: "#291507",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: "2.5rem",
      marginTop: "4rem",
    },
  },
  sectionBSpan: {
    width: "5rem",
    borderBottom: "4px solid #4D270C",
    position: "absolute",
    top: "79.5rem",
    borderRadius: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      top: "63.5rem",
    },
  },
}));

const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        background: "white",
        borderRadius: "2rem",
      },
    },
  },
});

const Homepage = ({ data }) => {
  var fourVal = [];
  if (data[0] !== undefined) {
    var j = 0;
    while (j < 4) {
      fourVal.push(data[Math.floor(Math.random() * data.length + 0)]);
      j++;
    }
  }
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Card className={classes.hero}>
        <Hidden smDown>
          {" "}
          <CardMedia
            className={classes.media}
            image={dhero}
            title="hero image"
          />
        </Hidden>
        <Hidden smUp>
          {" "}
          <CardMedia
            className={classes.media}
            image={mhero}
            title="hero image"
          />
        </Hidden>
        <CardContent className={classes.content}>
          <img src={logo} alt="logo" />
          <Typography variant="h6" className={classes.text}>
            Get to know more about your cat breed
          </Typography>
          <ThemeProvider theme={theme}>
            <Autocomplete
              options={data}
              getOptionLabel={(option) => option.name}
              className={classes.search}
              id="auto-highlight"
              autoHighlight
              onChange={(event, dt) => {
                history.push({
                  pathname:'/preview',
                  params:{dt}
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Enter your breed"
                  margin="normal"
                  style={{ borderColor: "unset" }}
                />
              )}
            />
          </ThemeProvider>
        </CardContent>
      </Card>
      <Card className={classes.heroBreed}>
        <CardContent className={classes.content}>
          <Typography
            style={{
              fontWeight: "500",
              lineHeight: "0.8rem",
              marginTop: "1rem",
            }}
          >
            Most Searched Breeds
          </Typography>
          <span
            style={{
              width: "3rem",
              borderBottom: "4px solid #4D270C",
              position: "inherit",
              top: "3.5rem",
              borderRadius: "0.5rem",
            }}
          ></span>
          <div style={{ width: "100%", display: "inline-flex" }}>
            <h1 className={classes.seemoreHeading}>
              66+ Breeds For you to discover
            </h1>
            <Typography className={classes.seemore}>
              <Link
                to="/breed"
                style={{
                  textDecoration: "none",
                  color: "#29150799",
                  fontWeight: "600",
                }}
              >
                {" "}
                SEE MORE -{">"}{" "}
              </Link>
            </Typography>
          </div>
          <Hidden mdDown>
            {" "}
            <span
              style={{
                height: "8rem",
                width: "0.6rem",
                background: "#DEC68B",
                position: "absolute",
                borderRadius: "0.8rem",
                left: "3.4rem",
                top: "18rem",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
              }}
            ></span>
          </Hidden>
          <ImageList className={classes.imageList} cols={2}>
            {fourVal.length === 4
              ? fourVal.map((dt) => {
                  return (
                    <ImageListItem
                      key={dt.name}
                      className={classes.imagelistitem}
                    >
                      <Link
                        to={{
                          pathname: "/preview",
                          params: { dt },
                        }}
                      >
                        <img
                          className={classes.breedImage}
                          src={dt.image.url}
                          alt={dt.image.url}
                          id={dt.id}
                        />
                        <Typography className={classes.breedName} variant="h6">
                          {dt.name}
                        </Typography>
                      </Link>
                    </ImageListItem>
                  );
                })
              : Array.from(new Array(4)).map((elem, indx) => {
                  return (
                    <Card className={classes.loadingImageList} key={indx}>
                      <Skeleton
                        animation="wave"
                        variant="rect"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Card>
                  );
                })}
          </ImageList>
        </CardContent>
      </Card>
      <Card className={classes.heroReason}>
        <div className={classes.divStyle}>
          <CardContent
            className={classes.sectionbContent}
            style={{ paddingLeft: "0" }}
          >
            <h1 className={classes.sectionbH1}>Why should you have a cat?</h1>
            <span className={classes.sectionBSpan}></span>
            <Typography style={{ fontWeight: "400", color: "#291507" }}>
              Havin a cat around you can actually trigger the calming chemicals
              in your body which lowers your stress and anxiety level.
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                fontWeight: "500",
                color: "#291507",
                marginTop: "3rem",
                opacity: "60%",
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#29150799",
                  fontWeight: "600",
                }}
              >
                READ MORE -{">"}
              </a>
            </Typography>
          </CardContent>
        </div>
        <div style={{ height: "100%", display: "inline-flex", width: "100%" }}>
          <CardMedia className={classes.mediaTwo} image={two}></CardMedia>
          <CardMedia className={classes.mediaOne} image={one}></CardMedia>
          <CardMedia className={classes.mediaThree} image={three}></CardMedia>
        </div>
      </Card>
    </>
  );
};

export default Homepage;
