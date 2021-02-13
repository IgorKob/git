import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function CheckboxListItem({indexId, index, text, onChange, checked, onClick}) {
  return (
    <React.Fragment>
      <ListItem key={indexId} role={undefined} dense button>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': indexId }}
            onChange={() => onChange(index)}
          />
        </ListItemIcon>
        <ListItemText id={indexId} primary={text} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={() => onClick(index)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
        </ListItem>
    </React.Fragment>
  );
}