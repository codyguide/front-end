/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CardMedia from "@material-ui/core/CardMedia";
import { withRouter } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import Button from "../CustomButtons/Button.js";
import { Grid } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  root: {
    maxWidth: 365,
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function Gallery(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [expanded, setExpanded] = React.useState(false);

  const [galleryData, setGalleryData] = useState([]);
  const [allData, setAllData] = useState([]);
  const allGallery = useSelector((state) => state.galleries);

  useEffect(() => {
    const newGallery = [];
    for (let i = 0; i < allGallery.length; i++) {
      newGallery.push([
        allGallery[i].id,
        allGallery[i].regiDate,
        allGallery[i].title,
        allGallery[i].writer,
        allGallery[i].image,
        allGallery[i].contents,
        allGallery[i].description,
      ]);
    }
    setAllData(newGallery);
    setGalleryData(newGallery.slice(0, 12));
  }, [allGallery]);

  const addGallery = () => {
    props.history.push("/admin/addgallery");
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handlePage = (event, value) => {
    const startNum = (value - 1) * 12;
    const endNum = value * 12;
    setGalleryData(allData.slice(startNum, endNum));
  };

  return (
    <div>
      <Grid container spacing={4} className={classes.gridContainer}>
        {galleryData.map((prop, key) => {
          return (
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.root} key={key}>
                <CardContent key={key}>
                  <RouterLink to={`/admin/gallerydetail/${prop[0]}`}>
                    {prop.map((index, key) => {
                    return (
                        <div>
                          <Typography
                            key={key}
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                          >
                            {index}
                          </Typography>
                        {/* <Typography variant="h5" component="h2">
                          {index}
                        </Typography> */}
                        {/* <Typography
                          className={classes.pos}
                          color="textSecondary"
                        >
                          {index}
                        </Typography> */}
                        {/* <CardMedia
                          // className={classes.media}
                          image="/picture.jpg"
                          title="Paella dish"
                        ></CardMedia> */}
                        {/* <Typography
                          className={classes.media}
                          variant="body2"
                          component="p"
                        >
                          <br />
                        </Typography> */}
                      </div>
                    );
                  })}
                  </RouterLink>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton>
                    <ThumbUpIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>Heat 1/2</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <div style={{ float: "right" }}>
        <Button
          variant="contained"
          color="primary"
          className="write-btn" 
          onClick={addGallery}
        >
          글쓰기
        </Button>
      </div>
      <div className={classes.root}>
        <Pagination
          count={parseInt(allGallery.length / 13) + 1}
          shape="rounded"
          onChange={handlePage}
        />
      </div>
    </div>
  );
}

export default withRouter(Gallery);