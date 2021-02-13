import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
// import img from './images/p1.jpg'
import { makeStyles } from '@material-ui/core/styles';
import ListMaterialUI from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Avatar from '@material-ui/core/Avatar';                           // img
import ItemListApp from './ItemList';

const useStyles = makeStyles((theme) => ({
    column: {
      margin: '1px',
    },
    title__wrap: {
      border: '1px solid #ccc',
    },
    title: {
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    icon: {
      minWidth: '33px',
    },
    small: {                     // img avatar
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    ItemList_wrap: {
      backgroundColor: '#ccc',
      paddingTop: '3px',          // dont work only (+ItemList_wrap2)
    },
    ItemList_wrap2: {      
      padding: '3px',
    },
  }));

const Column = React.memo(function Column({ column, index }) {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
      <Draggable draggableId={column.id} index={index}>
        {provided => (
          <div
            className={classes.column}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
              <ListItem button onClick={handleClick} {...provided.dragHandleProps} className={classes.title__wrap}>
                <ListItemIcon className={classes.icon}>
                  <AddShoppingCartIcon />
                  {/* <Avatar variant="rounded" alt={column.name} src={column.img} className={classes.small} /> */}
                  {/* <Avatar variant="rounded" alt={column.name} src={img} className={classes.small} /> */}
                </ListItemIcon>
                <ListItemText primary={column.name} className={classes.title} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit className={classes.ItemList_wrap}>
                <ListMaterialUI component="div" disablePadding className={classes.ItemList_wrap2}>
                    <ItemListApp column={column} index={index} />
                </ListMaterialUI>
              </Collapse>
          </div>
        )}
      </Draggable>
    );
  });
  export default Column;