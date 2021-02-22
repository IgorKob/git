import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const getStyle = ({ draggableStyle, virtualStyle}) => {
  const combined = {
    ...virtualStyle,
    ...draggableStyle
  };  

  const result = {
    ...combined,
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.87)',
  };

  return result;
}

const useStyles = makeStyles((theme) => ({
  number: {
    width: 'auto',
    paddingRight: '15px',
  },
}));

const Item = ({ provided, item, style, isDragging, index = ''}) => {
  const classes = useStyles();
  return (
      <ListItem button divider 
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        style={getStyle({
          draggableStyle: provided.draggableProps.style,
          virtualStyle: style,
        })}
      className={`item ${isDragging ? "is-dragging" : ""}`}
      >
        <p className={classes.number}>{index+1}</p>
        <ListItemText primary={item.name} secondary={item.groupName}/>
      </ListItem>
  );
}
export default Item;