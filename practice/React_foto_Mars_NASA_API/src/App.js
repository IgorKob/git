import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MANIFEST_FETCH, PHOTO_FETCH } from './redux/actionTypes/index';
import Rovers from './components/Rovers';
import ManifestTable from './components/ManifestTable';
import Sols from './components/Sols';
import Cameras from './components/Cameras';
import Pagination from './components/Pagination';
import styled from 'styled-components';
import ImageGrid from './components/ImageGrid';
import Progress from './components/Progress';
import { AlertApp } from './components/Alert';

const Main = styled.main`
  background: radial-gradient(40% 50%, #FAECD5, #CAE4D8);
  z-index: 2;
  margin: 0 auto;
  padding: 0;
  padding-bottom: 30px;
  max-width: 1440px;
  border-radius: 40px;  
`;
const Title = styled.h3`
  text-align: center; 
`;

function App() {
  const [sol, setSol] = useState(null);
  const [camera, setCamera] = useState(null);
  const [page, setPage] = React.useState(1);
  const [page2, setPage2] = React.useState(1);

  const dispatch = useDispatch();

  const name = useSelector(state => state.manifest.name);
  const landing_date = useSelector(state => state.manifest.landing_date);
  const max_date = useSelector(state => state.manifest.max_date);
  const max_sol = useSelector(state => state.manifest.max_sol);
  const status = useSelector(state => state.manifest.status);
  const total_photos = useSelector(state => state.manifest.total_photos);
  const launch_date = useSelector(state => state.manifest.launch_date);
  const photos = useSelector(state => state.manifest.photos);
  const pending = useSelector(state => state.manifest.pending);
  const error = useSelector(state => state.manifest.error);
  const pending2 = useSelector(state => state.photos.pending);
  const error2 = useSelector(state => state.photos.error);

  const photos_gallery = useSelector(state => state.photos.photos);
  const maxPage = useSelector(state => state.photos.maxPage);

  const manifestFetch = (roverName) => {
    dispatch({type: MANIFEST_FETCH, roverName})
  } 

  useEffect(() => {
    if (name && photos && camera) {
      dispatch({type: PHOTO_FETCH, name, sol, camera, page});
    }
  }, [camera, page]);

  const rovers_list = [{rover: 'Curiosity'}, {rover: 'Opportunity'}, {rover: 'Spirit'}];

  const sols_list = React.useMemo(() => {
    return photos.map((el, index) => ({sol: el.sol, text: `Sol: ${el.sol} (${el.earth_date})`}))
  },[name]);

  const cameras_list = React.useMemo(() => {
    if (photos.length > 0) {
      const arr = photos.find(el => el.sol === sol);
      if (arr) {
        return arr.cameras.map(el => ({camera: `${el.toLowerCase()}`})); 
      }
    }
  },[sol]);

  return (
    <>
      <Rovers rovers_list={rovers_list} manifestFetch={manifestFetch} name={name} />
  
      {pending && (<Progress />)}
      {error && (<AlertApp />)}
  
      {name.length > 0 && ( <>
        <ManifestTable name={name} 
                  launch_date={launch_date} 
                  landing_date={landing_date} 
                  max_date={max_date}
                  max_sol={max_sol}
                  status={status}
                  total_photos={total_photos}
              /> 
        <Main>
          {name.length > 0 && ( <Sols sols_list={sols_list} setSol={setSol}/> )}

          {sol !== null && ( <Cameras cameras_list={cameras_list} setCamera={setCamera}/> )}

          {pending2 && (<Progress />)}
          {error2 && (<AlertApp />)}

          {photos_gallery.length === 0 
            ? (<>{camera && (<Title>No more photos!</Title>)}</>) 
            : ( <ImageGrid  photos_gallery={photos_gallery}/>)}
            
          {camera && (<Pagination page={page} page2={page2} setPage={setPage} setPage2={setPage2} maxPage={maxPage}/>)}
        </Main>
      </>)}
    </>
  );
}
export default App;
