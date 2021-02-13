import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    maxWidth: 1440,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function ImageGrid({photos_gallery}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={300} cols={2} className={classes.gridList}>
        {photos_gallery.map((el) => (
          <GridListTile key={el.id} >
            <img src={el.img_src} alt={el.camera.full_name} />
            <GridListTileBar
              title={el.earth_date}
              subtitle={<span>by: {el.rover.name}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${el.camera.full_name}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}