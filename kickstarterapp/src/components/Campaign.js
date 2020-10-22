import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils";
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
import { useParams } from "react-router-dom";

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

// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0,
  //maximumFractionDigits: 0,
});

const Campaign = ({ campaign }) => {
  const user_id = useParams();
  const [prediction, setPrediction] = useState(0);
  const [loading, setLoading] = useState(true);

  const renderStatusMessage = () => {
    if (!loading) {
      if (prediction === 1) return "SUCCESS";
      else if (prediction === 0) return "FAIL";
      else return "Can't get Prediction!";
    }
    return "PREDICTING...";
  };

  const renderStatusBackgroundColor = () => {
    if (!loading) {
      if (prediction === 1) return "#028858";
      else if (prediction === 0) return "red";
      else return "purple";
    }
    return "grey";
  };

  useEffect(() => {
    axiosWithAuth()
      .post(
        `/api/users/${user_id.id}/campaigns/${campaign.campaign_id}/prediction`,
        {
          goal: campaign.goal,
          campaign_length: campaign.campaign_length,
          category: campaign.category,
          sub_category: campaign.sub_category,
          country: campaign.country,
          description: campaign.description,
        }
      )
      .then((res) => {
        console.log(res);
        setPrediction(res.data.prediction);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Unable to get Prediction", error);
        setPrediction(null);
        setLoading(false);
      });
  }, [campaign]);

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={renderStatusMessage()}
        style={{
          backgroundColor: renderStatusBackgroundColor(),
          color: "white",
          textAlign: "center",
        }}
      />
      {/* <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1362&q=80"
          title="Coffee"
        /> */}
      <CardHeader title={campaign.campaign_name} />
      <CardContent>
        <Typography
          style={{ paddingBottom: "15px" }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Monetary Goal: {formatter.format(campaign.goal)}
        </Typography>
        <Typography
          style={{ paddingBottom: "15px" }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Campaign Length: {campaign.campaign_length}
        </Typography>
        <Typography
          style={{ paddingBottom: "15px" }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Category: {campaign.category}
        </Typography>
        <Typography
          style={{ paddingBottom: "15px" }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Sub Category: {campaign.sub_category}
        </Typography>
        <Typography
          style={{ paddingBottom: "15px" }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Country: {campaign.country}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Edit">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
        {/* <IconButton aria-label="">
            <ThumbUpIcon style={{ color: "#028858" }} />
          </IconButton>
          <IconButton aria-label="">
            <ThumbDownIcon style={{ color: "red" }} />
          </IconButton> */}
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
          <Typography paragraph>{campaign.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Campaign;
