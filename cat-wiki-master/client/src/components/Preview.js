import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Breadcrumbs,
  Card,
  createTheme,
  Grid,
  makeStyles,
  Typography,
  ThemeProvider,
  Chip,
  CardMedia,
} from "@material-ui/core";
import { Link as LinkR } from "react-router-dom";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
    marginBottom: "2rem",
    display: "inline-flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  description: {
    width: "60%",
    marginLeft: "6rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      width: "100%",
    },
  },
  val: {
    marginTop: "1rem",
  },
  chipVal: {
    display: "inline-flex",
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  chips: {
    marginLeft: "2.5rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  activeChip: {
    backgroundColor: "#544439",
    width: "4rem",
    height: "0.6rem",
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "1rem",
      marginRight: "0.7rem",
    },
  },
  chip: {
    backgroundColor: "#E0E0E0",
    width: "4rem",
    height: "0.6rem",
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "1rem",
      marginRight: "0.7rem",
    },
  },
  topic: {
    width: "10rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  catsImages: {
    width: "100%",
    height: "100%",
    marginTop: "1rem",
  },
  catsImg: {
    height: "100%",
  },
}));

const theme = createTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        display: "none",
      },
      rail: {
        height: "5px",
        borderRadius: "5px",
      },
      mark: {
        width: "5px",
        backgroundColor: "#fff",
      },
      markActive: {
        width: "5px",
      },
    },
    MuiTypography: {
      body1: {
        fontWeight: "500",
      },
    },
  },
});

const Preview = (props) => {
  const classes = useStyles();
  const data = props.location.params.dt;
  const id = props.location.params.dt.id;
  // const images = [];
  const [images, setImages] = useState([]);

  const getImages = useCallback(async () => {
    setImages(
      await axios
        .get(
          `https://api.thecatapi.com/v1/images/search?api_key=47bba2ab-5f72-4a13-bf04-3645158c8d9d&limit=10&breed_id=${id}&size=small`
        )
        .then((response) => {
          return response.data;
        })
        .catch((err) => console.log(err))
    );
  }, [setImages, id]);
  useEffect(() => {
    getImages();
  }, [getImages]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Breadcrumbs aria-label="breadcrumb">
          <LinkR to="/">Home</LinkR>
          <LinkR to="/breed">Breeds</LinkR>
          <Typography color="textPrimary">{data.name}</Typography>
        </Breadcrumbs>
        <Grid className={classes.root}>
          <Card style={{ width: "20rem", height: "15rem" }}>
            <span
              style={{
                height: "14rem",
                width: "0.6rem",
                background: "#DEC68B",
                position: "absolute",
                borderRadius: "0.8rem",
                left: "3.4rem",
                top: "9rem",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
                zIndex: "-1",
              }}
            ></span>
            <img
              src={data.image.url}
              alt={data.name}
              style={{ width: "100%", height: "100%" }}
            />
          </Card>
          <Box className={classes.description}>
            <Box fontFamily="Montserrat" fontSize="2rem" fontWeight="500">
              {data.name}
            </Box>
            <Box
              fontWeight="500"
              lineHeight="1.5rem"
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              {data.description}
            </Box>
            <Box>
              <b>Temperament:</b> {" " + data.temperament}
            </Box>
            <Box className={classes.val}>
              <b>Origin:</b> {" " + data.origin}
            </Box>
            <Box className={classes.val}>
              <b>Life Span:</b> {" " + data.life_span}
            </Box>
            <Box className={classes.chipVal}>
              <b className={classes.topic}>Adaptability:</b>
              <Box className={classes.chips}>
                {Array.from(new Array(data.adaptability)).map((elem, indx) => {
                  return <Chip key={indx} className={classes.activeChip} />;
                })}
                {Array.from(new Array(5 - data.adaptability)).map(
                  (elem, indx) => {
                    return <Chip key={indx} className={classes.chip} />;
                  }
                )}
              </Box>
            </Box>
            <Box className={classes.chipVal}>
              <b className={classes.topic}>Affection level:</b>
              <Box className={classes.chips}>
                {Array.from(new Array(data.affection_level)).map(
                  (elem, indx) => {
                    return <Chip key={indx} className={classes.activeChip} />;
                  }
                )}
                {Array.from(new Array(5 - data.affection_level)).map(
                  (elem, indx) => {
                    return <Chip key={indx} className={classes.chip} />;
                  }
                )}
              </Box>
            </Box>
            <Box className={classes.chipVal}>
              <b className={classes.topic}>Child Friendly:</b>
              <Box className={classes.chips}>
                {Array.from(new Array(data.child_friendly)).map(
                  (elem, indx) => {
                    return <Chip key={indx} className={classes.activeChip} />;
                  }
                )}
                {Array.from(new Array(5 - data.child_friendly)).map(
                  (elem, indx) => {
                    return <Chip key={indx} className={classes.chip} />;
                  }
                )}
              </Box>
            </Box>
            <Box className={classes.chipVal}>
              <b className={classes.topic}>Grooming:</b>
              <Box className={classes.chips}>
                {Array.from(new Array(data.grooming)).map((elem, indx) => {
                  return <Chip key={indx} className={classes.activeChip} />;
                })}
                {Array.from(new Array(5 - data.grooming)).map((elem, indx) => {
                  return <Chip key={indx} className={classes.chip} />;
                })}
              </Box>
            </Box>
            <Box className={classes.chipVal}>
              <b className={classes.topic}>Itelligence:</b>
              <Box className={classes.chips}>
                {Array.from(new Array(data.intelligence)).map((elem, indx) => {
                  return <Chip key={indx} className={classes.activeChip} />;
                })}
                {Array.from(new Array(5 - data.intelligence)).map(
                  (elem, indx) => {
                    return <Chip key={indx} className={classes.chip} />;
                  }
                )}
              </Box>
            </Box>
            <Box className={classes.chipVal}>
              <b className={classes.topic}>Health Issues:</b>
              <Box className={classes.chips}>
                {Array.from(new Array(data.health_issues)).map((elem, indx) => {
                  return <Chip key={indx} className={classes.activeChip} />;
                })}
                {Array.from(new Array(5 - data.health_issues)).map(
                  (elem, indx) => {
                    return <Chip key={indx} className={classes.chip} />;
                  }
                )}
              </Box>
            </Box>
            <Box className={classes.chipVal}>
              <b className={classes.topic}>Social needs:</b>
              <Box className={classes.chips}>
                {Array.from(new Array(data.social_needs)).map((elem, indx) => {
                  return <Chip key={indx} className={classes.activeChip} />;
                })}
                {Array.from(new Array(5 - data.social_needs)).map(
                  (elem, indx) => {
                    return <Chip key={indx} className={classes.chip} />;
                  }
                )}
              </Box>
            </Box>
            <Box className={classes.chipVal}>
              <b className={classes.topic}>Stranger Friendly:</b>
              <Box className={classes.chips}>
                {Array.from(new Array(data.stranger_friendly)).map(
                  (elem, indx) => {
                    return <Chip key={indx} className={classes.activeChip} />;
                  }
                )}
                {Array.from(new Array(5 - data.stranger_friendly)).map(
                  (elem, indx) => {
                    return <Chip key={indx} className={classes.chip} />;
                  }
                )}
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid style={{ marginBottom: "5rem", marginTop: "2rem" }}>
          <Typography variant="h4">Photos</Typography>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 5 }}
          >
            <Masonry gutter="10px">
              {images.length !== 0 ? (
                images.map((img) => {
                  return (
                    <Card key={img.id} className={classes.catsImages}>
                      <CardMedia
                        component="img"
                        image={img.url}
                        alt={img.breeds.name}
                        className={classes.catsImg}
                      />
                    </Card>
                  );
                })
              ) : (
                <>
                  {" "}
                  <Card>
                    <Skeleton
                      animation="wave"
                      variant="rect"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Card>
                </>
              )}
            </Masonry>
          </ResponsiveMasonry>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Preview;
