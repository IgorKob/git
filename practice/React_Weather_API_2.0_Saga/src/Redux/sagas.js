import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { geolocationFetch, weatherFetch } from '../api/api';

function* setGeolocationSaga() {
    yield put({ type: 'SET_IS_LOADING'})
    try {
        const response = yield call(geolocationFetch)
        if (response.status === 200) {
            yield call(setWeatherSaga, response.data.city)
            yield put({ type: 'SET_CITY', payload: response.data.city })
            yield put({ type: 'SET_COUNTRY', payload: response.data.country_name })
        } else {
            yield put({ type: 'SET_ERROR_MESS', payload: response.data.message })
        }
    }
    catch(error) {
        yield put({ type: 'SET_ERROR_MESS', payload: error.response.data.message })
    }
        yield put({ type: 'SET_IS_LOADING'})
}

function* setWeatherSaga(city) {
    const cityURL = city.replace(/\s/g, '-'); 
    yield put({ type: 'SET_IS_LOADING2'})
    try {
        const response = yield call(weatherFetch.geolocation, cityURL)
        if (response.data.cod === 200) {
           yield put({ type: 'SET_WEATHER', payload: response.data })
           yield put({ type: 'SET_ERROR_MESS', payload: null })
        } else {
           yield put({ type: 'SET_WEATHER', payload: {} })
           yield put({ type: 'SET_ERROR_MESS', payload: response.data.message })
        }
    } catch(error) {
        yield put({ type: 'SET_WEATHER', payload: {} })
        yield put({ type: 'SET_ERROR_MESS', payload: error.response.data.message })
    }
    yield put({ type: 'SET_IS_LOADING2' })
}
  
function* setWeatherSearchSaga(search) {
    const cityURL = search.search.replace(/\s/g, '-'); 
    yield put({ type: 'SET_IS_LOADING2'})
    try {
        const response = yield call(weatherFetch.search, cityURL)
        if (response.data.cod === '200') {
            const list = response.data.list;
            const startNewDay = list.findIndex(el => el.dt_txt.split(' ')[1] === '00:00:00');
            const arr = [];
            if (startNewDay > 0) {
                arr.push(list.splice(0, startNewDay))
            }
            while(list.length > 0) {
                arr.push(list.splice(0, 8))
            }
            yield put({ type: 'SET_WEATHER_SEARCH', payload: arr })
            yield put({ type: 'SET_WEATHER_CITY', payload: response.data.city.name })
            yield put({ type: 'SET_WEATHER_COUNTRY', payload: response.data.city.country })
            yield put({ type: 'SET_ERROR_MESS_SEARCH', payload: null })
        } else {
            yield put({ type: 'SET_WEATHER_SEARCH', payload: [] })
            yield put({ type: 'SET_ERROR_MESS_SEARCH', payload: response.data.message })
        }
    } catch(error) {
        yield put({ type: 'SET_WEATHER_SEARCH', payload: [] })
        yield put({ type: 'SET_ERROR_MESS_SEARCH', payload: error.response.data.message })
    }
    yield put({ type: 'SET_IS_LOADING2' })
}

export default function* rootSaga() {
    yield takeEvery('SET_GEOLOCATION_SAGA', setGeolocationSaga);
    yield takeLatest('SET_WEATHER_SEARCH_SAGA', setWeatherSearchSaga);
}