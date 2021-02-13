import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardApp({imgSrc, imgAlt, title, subTitle, date, text1, text2, text3, text4, handleClose}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const d = new Date(date);
  const dateFinish = `${d.getDate()},${d.getMonth() + 1},${d.getFullYear()}`;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt={imgAlt} src={imgSrc} />
        }
        action={
          <IconButton aria-label="settings" onClick={handleClose}>X</IconButton>
        }
        title={title}
        subheader={`${subTitle} - ${dateFinish}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {text1}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {text2}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {text3}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
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
          <Typography paragraph>{title}:</Typography>
          <Typography paragraph>
            {text4}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}