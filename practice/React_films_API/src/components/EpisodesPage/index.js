import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EPISODE_FETCH } from '../../redux/actionTypes';
import Progress from '../UI/Progress';
import AlertApp from '../UI/Alert';
import Pagination from '../UI/Pagination';
import Select from '../UI/Select';
import Grid from '@material-ui/core/Grid';
import TableApp from '../UI/Table';
import TableCell from '@material-ui/core/TableCell';
import TypographyH from '../UI/TypographyH';

const Episodes = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [episode, setEpisode] = useState('');

  const dispatch = useDispatch();
  
  const pending = useSelector(state => state.all.pending);
  const error = useSelector(state => state.all.error);
  const pages = useSelector(state => state.episode.pages);
  const results = useSelector(state => state.episode.results); 

  useEffect(() => {
    setPage(1)
    dispatch({type: EPISODE_FETCH, page: 1, name, episode})
  }, [name, episode]);

  useEffect(() => {
    dispatch({type: EPISODE_FETCH, page, name, episode})
  }, [page]);

  // filter
  const nameArr = results.map(el => el.name);
  const episodeArr = results.map(el => el.episode);

  // table
  const tableTitleArr = ['The name of the episode', 'The air date of the episode', 'The code of the episode', 'Time at which the episode was created in the database'];
  const tableArr = React.useMemo(() => {
    return results.map(el => ({name: el.name, air_date: el.air_date, episode: el.episode, created: el.created}))
  },[results]);

  return (
    <main>
      {pending ? (<Progress />) : error ? (<AlertApp />) : (<>
        <TypographyH hn='h2' text={'Episodes'}/>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Select arr={nameArr} 
              title='Name' 
              subTitle='Filter by name' 
              setValue={setName}
              value={name} 
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select arr={episodeArr} 
              title='Episode' 
              subTitle='Filter by episode' 
              setValue={setEpisode}
              value={episode} 
            />    
          </Grid>
        </Grid>

        <TableApp rows={tableArr} arr={tableTitleArr}>
          {row => (<React.Fragment key={row.id}>
              <TableCell>
                {row.name}
              </TableCell>
              <TableCell>
                {row.air_date}
              </TableCell>
              <TableCell>
                {row.episode}
              </TableCell>
              <TableCell>
                {row.created}
              </TableCell></React.Fragment>)}
        </TableApp>
      
        <Pagination page={page} setPage={setPage} maxPage={pages}/>
      </>)}
    </main>
  ); 
}
export default Episodes;