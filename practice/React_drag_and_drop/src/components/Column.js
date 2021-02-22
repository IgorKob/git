import React, { useState, useRef } from "react";
import { Draggable } from "react-beautiful-dnd";
import { makeStyles } from '@material-ui/core/styles';
import ListMaterialUI from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Avatar from '@material-ui/core/Avatar';                           
import ItemListApp from './ItemList';

const useStyles = makeStyles((theme) => ({
  column: {
    margin: '3px',
    marginBottom: '0px',
    marginTop: '0px',
    backgroundColor: 'rgb(221, 221, 221)',
  },
  title__wrap: {
    border: '1px solid #ddd',
    borderTop: '3px solid #fff',
    borderBottom: '0',
    padding: '25px 15px',
    transition: 'background .4s',
    transition: 'boxShadow .4s',
    '&:hover': { opacity: '.9' },
  },
  listItemText: {              
    fontSize:'.9rem',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingLeft: '8px',
  },
  icon: {
    minWidth: '33px',
    position: 'relative',
  },
  lengthGroup: {
    position: 'absolute',
    fontSize: '12px',
    top: '-105%',
    left: '55%',
    backgroundColor: 'red',
    color: '#fff',
    borderRadius: '50%',
    padding: '7% 13%',
    textAlign: 'center',
    verticalAlign: 'center',
    lineHeight: '1em',
  },
  small: {          
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  ItemList_wrap: {
    backgroundColor: '#f5f5f5',
    transition: 'background .4s',
  },
}));

const Column = React.memo(function Column({ column, index, columnId = null }) {
    const classes = useStyles();
    const openStart = columnId === 'разное' ? true : false;
    const [open, setOpen] = useState(openStart);
    const titleWrqpRef = useRef();
    
    const handleClick = (id = null) => {
      if (id !== "разное") {
        setOpen(!open);
      }
    };

    const getListStyle = (isDraggingOver) => {
      return {
        background: isDraggingOver ? '#a0a0ff' :  open ? '#f4f4f4' : '#ddd',   
      }
    };

    return (
      <Draggable draggableId={column.id} index={index}>
        {(provided, snapshot) => {
          return (
          <div
            className={classes.column}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <ListItem button 
              onClick={() => handleClick(column.id)} 
              {...provided.dragHandleProps} 
              className={classes.title__wrap}
              style={getListStyle(snapshot.isDragging)}
              ref={titleWrqpRef}
            >
              <ListItemIcon className={classes.icon}>
                {column.items.length > 0 && <p className={classes.lengthGroup}>{column.items.length}</p>}
                <AddShoppingCartIcon />
                {/* <Avatar variant="rounded" alt={column.name} src={column.img} className={classes.small} /> */}
              </ListItemIcon>
              <ListItemText primary={column.name} className={classes.title} classes={{primary:classes.listItemText}}/>
              {column.id !== "разное" && (open ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            <div className={classes.ItemList_wrap} >
              <ListMaterialUI component="div" disablePadding className={classes.ItemList_wrap2} style={{height: !open && '0px', paddingTop: open && '3px'}}>
                  <ItemListApp column={column} index={index} 
                    open={open}
                    titleWrqpRef={titleWrqpRef}
                  />
              </ListMaterialUI>
            </div>
          </div>
          )}}
      </Draggable>
    );
  });
  export default Column;