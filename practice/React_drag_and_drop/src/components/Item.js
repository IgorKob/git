import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const getStyle = ({ draggableStyle, virtualStyle, isDragging }) => {
    const combined = {
      ...virtualStyle,
      ...draggableStyle
    };  
    const grid = 8;  

    const result = {
      ...combined,
      height: isDragging ? combined.height : combined.height - grid,
      left: isDragging ? combined.left : combined.left + grid,
      width: isDragging
        ? draggableStyle.width
        : `calc(${combined.width} - ${grid * 2}px)`,
      marginBottom: grid,
      backgroundColor: '#aaa',
    };
    return result;
  }

const Item = ({ provided, item, style, isDragging }) => {
    return (
        <ListItem button divider 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={getStyle({
            draggableStyle: provided.draggableProps.style,
            virtualStyle: style,
            isDragging
          })}
        className={`item ${isDragging ? "is-dragging" : ""}`}
        >
          <ListItemText primary={item.name} />
        </ListItem>
    );
  }
export default Item;