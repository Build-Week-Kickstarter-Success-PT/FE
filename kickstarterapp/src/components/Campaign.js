import React, { useState, useEffect, useContext } from "react";
import { useParams, useRouteMatch, NavLink } from "react-router-dom";
import { axiosWithAuth } from "../utils";
import { KickStartContext } from "../context";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
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
import ShareIcon from "@material-ui/icons/Share";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "25px",
  },
  media: {
    height: 200,
    paddingTop: "70%", // 16:9
    objectFit: "scale-down",
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

const Campaign = ({ campaign, user, setSelectedCampaign }) => {
  const user_id = useParams();
  const urlParams = useRouteMatch();
  const [prediction, setPrediction] = useState(0);
  const [loading, setLoading] = useState(true);
  const { editCampaign, deleteCampaign } = useContext(KickStartContext);

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

  const renderStatusImage = () => {
    if (!loading) {
      if (prediction === 1)
        return "https://images.unsplash.com/photo-1601412436465-922fadda062e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80";
      else if (prediction === 0)
        return "https://images.unsplash.com/photo-1601412436518-3c690b92b43f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80";
      else
        return "https://images.unsplash.com/photo-1601412436405-1f0c6b50921f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80";
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

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleShare = (e) => {
    e.preventDefault();
    setOpen(false);

    emailjs
      .send(
        "service_wi0ojgd",
        "template_o7oecvf",
        {
          user_email: email,
          from_name: user.name.charAt(0).toUpperCase() + user.name.slice(1),
          campaign_name: campaign.campaign_name,
          goal: campaign.goal,
          campaign_length: campaign.campaign_length,
          category: campaign.category,
          sub_category: campaign.sub_category,
          country: campaign.country,
          description: campaign.description,
          result: prediction === 1 ? "succeed" : "fail",
        },
        "user_t5U2zwLE4BYDHBMaJje7o"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Share this Campaign</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter an email address to share this campaign.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleShare} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
      <Card className={classes.root}>
        <CardHeader
          title={renderStatusMessage()}
          style={{
            backgroundColor: renderStatusBackgroundColor(),
            color: "white",
            textAlign: "center",
          }}
        />
        {
          <CardMedia
            className={classes.media}
            image={renderStatusImage()}
            title="Prediction"
          />
        }
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
          <IconButton aria-label="Share" onClick={handleClickOpen}>
            <ShareIcon />
          </IconButton>
          <NavLink to={`${urlParams.url}/edit`}>
            <IconButton
              aria-label="Edit"
              onClick={() => setSelectedCampaign(campaign)}
            >
              <EditIcon />
            </IconButton>
          </NavLink>
          <IconButton
            aria-label="Delete"
            onClick={() => deleteCampaign(campaign)}
          >
            <DeleteIcon />
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
            <Typography paragraph>{campaign.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default Campaign;
