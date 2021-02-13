import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_LOCALSTORAGE, SET_LOCALSTORAGE } from '../../redux/actionTypes';
import Input from '../UI/Input';
import Button from '../UI/Button';
import CheckboxListItem from '../UI/CheckboxListItem';
import List from '../UI/List';
import TypographyH from '../UI/TypographyH';

const Profile = () => {
  const [episode , setEpisode] = useState('');
  const [episodes , setEpisodes] = useState([]);
  const dispatch = useDispatch();
  const results = useSelector(state => state.profile.results);

  const nameDB = 'episodes';   // LocalStorage name
  useEffect(() => {
    dispatch({type: GET_LOCALSTORAGE, nameDB})
  }, []);

  useEffect(() => {
    if (episodes.length > 0) {
      dispatch({type: SET_LOCALSTORAGE, nameDB, episodes})
    }
  }, [episodes]);

  const handleChange = ({target}) => {
    setEpisode(target.value)
  };

  const handleClick = () => {
    if (episode) {
      setEpisodes([...results, {episode: episode, checked: false}]);
      setEpisode('');
    }
  };
 
  const removeClick = (index) => {
    const episodes = results.filter((el, index2) => index2 !== index);
    setEpisodes(episodes);
    dispatch({type: SET_LOCALSTORAGE, nameDB, episodes})
  };

  const checkedClick = (index) => {
    const newResults = results.map((el, index2) => {
      if (index2 === index) {return ({episode: el.episode, checked: !el.checked})}
      return el;
    });
    setEpisodes(newResults);
  };

  return (
    <main>
      <TypographyH hn='h5' text={'Add new episode to watch later'}/>
      <Input value={episode} handleChange={handleChange} text={'Add new episode'}/>
      <Button value='Add new episode' handleClick={handleClick}/>
      {results.length === 0 
        ? (<TypographyH hn='h5' text={"You don't have the series to watch later!"}/>) 
        : (<List>
          {results.map((el, index) => (<React.Fragment key={index}>
              <CheckboxListItem indexId={`ListItem${index}`}
                index={index} 
                text={el.episode}
                onChange={checkedClick}
                checked={el.checked}
                onClick={removeClick}
              />
            </React.Fragment>))}
          </List>
        )} 
    </main>
  ); 
}
export default React.memo(Profile);