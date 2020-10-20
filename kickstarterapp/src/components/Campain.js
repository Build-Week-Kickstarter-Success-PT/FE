import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "25px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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

const Campaign = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title="SUCCESS"
        style={{
          backgroundColor: "#028858",
          color: "white",
          textAlign: "center",
        }}
      />
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1362&q=80"
        title="Coffee"
      />
      <CardHeader title="Support Basilica Hudson!" />
      <CardContent>
        <Typography
          style={{ paddingBottom: "15px" }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Monetary Goal: $25,000
        </Typography>
        <Typography
          style={{ paddingBottom: "15px" }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Campaign Length: 45 days
        </Typography>
        <Typography
          style={{ paddingBottom: "15px" }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Category: Music
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Edit">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="">
          <ThumbUpIcon style={{ color: "#028858" }} />
        </IconButton>
        <IconButton aria-label="">
          <ThumbDownIcon style={{ color: "red" }} />
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
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            Right now, like so many other independent venues and nonprofits,
            Basilica Hudson is struggling to keep the lights on. The
            cancellation of our 10th Anniversary Season due to COVID-19 was
            devastating and makes our ability to recover and sustain
            challenging.
          </Typography>
          <Typography paragraph>
            Our programs and general operations rely almost entirely on the
            revenue from ticket sales and attendance at large-scale public
            events. Even during a regular season of programming, we operate on a
            tight hand-to-mouth budget. In March, we closed our venue and
            cancelled our planned season to keep our community safe, creating a
            70% budget shortfall.
          </Typography>
          <Typography paragraph>
            We are busy adapting our programs - moving online and outdoors - to
            maintain programs that serve people and the planet for another
            decade. Above all, Basilica exists for the artists, makers and
            activists that present with us, visit us, celebrate with us and
            share in our passion for the emerging, the fringe, the avant-garde,
            the loud, the beautiful, the weird, the handmade, the health of
            planet, and the challenges and joys of new experiences through the
            transformative experience of human exchange. We want to continue
            supporting creatives, and we need your help to do it.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Campaign;