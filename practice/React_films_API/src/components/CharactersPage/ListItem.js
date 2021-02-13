import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Modal from './Modal';

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
}));

export default function ListItemApp(props) {
  const classes = useStyles();
  const {imgSrc, imgAlt, title, textBold, text, subTitle, date, text1, text2, text3, text4} = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ListItem alignItems="flex-start" onClick={handleOpen}>
        <ListItemAvatar>
          <Avatar alt={imgAlt} src={imgSrc} />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {textBold}
              </Typography>
              {` — ${text}`}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <Modal open={open}
        imgSrc={imgSrc} 
        imgAlt={imgAlt}
        title={title} 
        subTitle={subTitle} 
        date={date}
        text1={text1}
        text2={text2}
        text3={text3}
        text4={text4}
        handleClose={handleClose}
      />
    </>
  );
}