import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import Spinner from '../Spinner/Spinner';
import { GeolocationWeather } from '../GeolocationWeather/GeolocationWeather';
import { SearchWeather } from '../SearchWeather/SearchWeather';
import { AlertApp } from './../Alert';
import SearchInput from './../SearchInput';
import { LinearProgress } from '@material-ui/core';
import * as types from '../../Redux/ActionTypes'

export default function HomeContainer() {

    const [search, setSearch] = useState('');
    const [searchPrev, setSearchPrev] = useState('');

    const city = useSelector(state => state.geolocation.city);
    const country = useSelector(state => state.geolocation.country);

    const weather = useSelector(state => state.weather.weather);

    const searchArr = useSelector(state => state.weather.weatherSearch);
    const searchCity = useSelector(state => state.weather.city);
    const searchCountry = useSelector(state => state.weather.country);

    const isLoading = useSelector(state => state.errorMess.isLoading)
    const isLoading2 = useSelector(state => state.errorMess.isLoading2)
    const error_mess = useSelector(state => state.errorMess.error);
    const errorSearch = useSelector(state => state.errorMess.errorSearch);

    const dispatch = useDispatch();
         
    useEffect(() => {
        if (city.length === 0) {
            dispatch({type: types.SET_GEOLOCATION_SAGA});
        }
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleClick = () => {
        if (searchPrev !== search) {
            setSearchPrev(search);
            dispatch({type: types.SET_WEATHER_SEARCH_SAGA, search});
        }
    }

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nocvember', 'December'];
    const date = new Date();
    const dates = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;

    const startDay = date.getDay();
    const finishDay = startDay + searchArr.length + 1;

    const newDays = []
    newDays.push(days.slice(startDay, finishDay))

    return (
        <div>
          
            {isLoading ? <Spinner /> : (<>
                  
                {city.length !== 0 && <GeolocationWeather city={city}
                    country={country}
                    weather={weather}
                    dates={dates}        
                />}

                {error_mess && (<AlertApp mess={error_mess}/>)}

                <hr></hr>
                
                <SearchInput onChange={handleChange} 
                    onClick={handleClick}
                    value={search} 
                />

                {isLoading2 && (<LinearProgress />)}

                {errorSearch && (<AlertApp mess={errorSearch} />)}

                {searchArr.length !== 0  && <SearchWeather searchArr={searchArr} 
                    searchCity={searchCity}
                    searchCountry={searchCountry}
                    newDays={newDays}
                />}

            </>)}            
        </div>
    )
}
