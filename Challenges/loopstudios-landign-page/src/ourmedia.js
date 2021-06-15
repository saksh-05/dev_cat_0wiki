import {
  Box,
  Button,
  createMuiTheme,
  GridList,
  GridListTile,
  GridListTileBar,
  Hidden,
  makeStyles,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import mearth from "./images/mobile/image-deep-earth.jpg";
import dearth from "./images/desktop/image-deep-earth.jpg";
import mnight from "./images/mobile/image-night-arcade.jpg";
import dnight from "./images/desktop/image-night-arcade.jpg";
import msoccer from "./images/mobile/image-soccer-team.jpg";
import dsoccer from "./images/desktop/image-soccer-team.jpg";
import mgrid from "./images/mobile/image-grid.jpg";
import dgrid from "./images/desktop/image-grid.jpg";
import mabove from "./images/mobile/image-from-above.jpg";
import dabove from "./images/desktop/image-from-above.jpg";
import mpocket from "./images/mobile/image-pocket-borealis.jpg";
import dpocket from "./images/desktop/image-pocket-borealis.jpg";
import mcuriosity from "./images/mobile/image-curiosity.jpg";
import dcuriosity from "./images/desktop/image-curiosity.jpg";
import mfisheye from "./images/mobile/image-fisheye.jpg";
import dfisheye from "./images/desktop/image-fisheye.jpg";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "92.28%",
  },
  btn: {
    background: 'white',
    color:'black',
    width: "10rem",
    height: "2.8rem",
    fontFamily: "Josefin Sans",
    border: "2px solid black",
    borderRadius: "0",
    marginTop: "3rem",
    marginBottom: "5rem",
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiGridListTileBar: {
      root: {
        background: "unset",
        fontFamily: "Josefin Sans",
        width: "10rem",
        height: "50%",
      },
      titleWrap: {
        overflow: "unset",
      },
      title: {
        overflow: "unset",
        flexWrap: "wrap",
        whiteSpace: "wrap",
        fontSize: "2rem",
        lineHeight: "2rem",
        width: "11rem",
      },
    },
  },
});

const mtileData = [
  {
    img: mearth,
    title: "DEEP EARTH",
  },
  {
    img: mnight,
    title: "NIGHT ARCADE",
  },
  {
    img: msoccer,
    title: "SOCCER TAEM VR",
  },
  {
    img: mgrid,
    title: "THE GRID",
  },
  {
    img: mabove,
    title: "FROM UP ABOVE VR",
  },
  {
    img: mpocket,
    title: "POCKET BOREALS",
  },
  {
    img: mcuriosity,
    title: "THE CURIOSITY",
  },
  {
    img: mfisheye,
    title: "MAKE IT FISHEYE",
  },
];

const dtileData = [
  {
    img: dearth,
    title: "DEEP EARTH",
  },
  {
    img: dnight,
    title: "NIGHT ARCADE",
  },
  {
    img: dsoccer,
    title: "SOCCER TAEM VR",
  },
  {
    img: dgrid,
    title: "THE GRID",
  },
  {
    img: dabove,
    title: "FROM UP ABOVE VR",
  },
  {
    img: dpocket,
    title: "POCKET BOREALS",
  },
  {
    img: dcuriosity,
    title: "THE CURIOSITY",
  },
  {
    img: dfisheye,
    title: "MAKE IT FISHEYE",
  },
];

const ourmedia = () => {
  const classes = useStyles();
  const handleClick = (e) => {
    e.target.style.background = 'black';
    e.target.style.color = 'white';
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Hidden mdUp>
        <GridList cols={1} style={{ width: "100%" }}>
            {mtileData.map((tile) => (
              <GridListTile
                key={tile.img}
                style={{
                  padding: 0,
                  marginTop: "1.5rem",
                }}
              >
                <img src={tile.img} alt={tile.img} />
                <GridListTileBar title={tile.title} />
              </GridListTile>
            ))}
        </GridList>
        <Box textAlign="center">
          <Button className={classes.btn} onClick={handleClick}>
            See All
          </Button>
        </Box>
      </Hidden>
      <Hidden mdDown>
        <GridList cols={12} spacing={24}>
          {dtileData.map((tile) => (
            <GridListTile key={tile.img} cols={3} style={{ height: "29rem" }}>
              <img src={tile.img} />
              <GridListTileBar
                title={tile.title}
                style={{ alignItems: "flex-end", bottom: "1rem" }}
              />
            </GridListTile>
          ))}
        </GridList>
      </Hidden>
    </ThemeProvider>
  );
};

export default ourmedia;
