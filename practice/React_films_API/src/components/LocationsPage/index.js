import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOCATION_FETCH } from '../../redux/actionTypes';
import Progress from '../UI/Progress';
import AlertApp from '../UI/Alert';
import Pagination from '../UI/Pagination';
import Select from '../UI/Select';
import Grid from '@material-ui/core/Grid';
import TableApp from '../UI/Table';
import TableCell from '@material-ui/core/TableCell';
import TypographyH from '../UI/TypographyH';

const Locations = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [typeLocation, setTypeLocation] = useState('');
  const [dimension, setDimension] = useState('');

  const dispatch = useDispatch();

  const pending = useSelector(state => state.all.pending);
  const error = useSelector(state => state.all.error);
  const pages = useSelector(state => state.location.pages);
  const results = useSelector(state => state.location.results); 

  useEffect(() => {
    setPage(1)
    dispatch({type: LOCATION_FETCH, page: 1, name, typeLocation, dimension})
  }, [name, typeLocation, dimension]);

  useEffect(() => {
    dispatch({type: LOCATION_FETCH, page, name, typeLocation, dimension})
  }, [page]);

  // filter
  const nameArr = [...new Set(results.map(el => el.name))];
  const typeArr = [...new Set(results.map(el => el.type))];
  const dimensionArr = [...new Set(results.map(el => el.dimension))];

  // table
  const tableTitleArr = ['The name of the location', 'The type of the location', 'The dimension in which the location is located', 'Time at which the location was created in the database'];
  const tableArr = React.useMemo(() => {
    return results.map(el => ({name: el.name, type: el.type, dimension: el.dimension, created: el.created}))
  },[results]);

  return (
    <main>
      {pending ? (<Progress />) : error ? (<AlertApp />) : (<>
        <TypographyH hn='h2' text={'Locations'}/>
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
            <Select arr={typeArr} 
              title='Type' 
              subTitle='Filter by type' 
              setValue={setTypeLocation}
              value={typeLocation} 
            />    
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select arr={dimensionArr} 
              title='Dimension' 
              subTitle='Filter by dimension' 
              setValue={setDimension}
              value={dimension} 
            />    
          </Grid>
        </Grid>

        <TableApp rows={tableArr} arr={tableTitleArr}>
          {row => (<React.Fragment key={row.id}>
              <TableCell>
                {row.name}
              </TableCell>
              <TableCell>
                {row.type}
              </TableCell>
              <TableCell>
                {row.dimension}
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
export default Locations;