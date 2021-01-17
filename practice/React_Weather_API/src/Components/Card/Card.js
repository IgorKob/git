import React from 'react'
import { PropTypes } from 'prop-types';

export default function Card({dayTitle=null, padding=null, padding2=null, newDays=null, index=null, el=null, el2=null}) {
    return (
        <>
            <div className={dayTitle}>{newDays ? (`${newDays[0][index]}`) : (`${el2.dt_txt}`)}</div>
            <div className={dayTitle}>{el ? (`${Math.trunc(el[0].main.temp)}`) : (`${Math.trunc(el2.main.temp)}`)}°C</div>
            <img src={`https://openweathermap.org/img/wn/${el ? (el[0].weather[0].icon) : (el2.weather[0].icon)}@4x.png`} alt='img'/>
            {el2 && <div className={padding}>{el2.weather[0].description}</div>}
            {el2 && <div className={padding}>Atmospheric pressure: {el2.main.pressure}hPa</div>}
            <div className={padding}>Humidity: {el ? (`${el[0].main.humidity}`) : (`${el2.main.humidity}`)}%</div>
            <div className={padding}>Cloudiness: {el ? (`${el[0].clouds.all}`) : (`${el2.clouds.all}`)}%</div>
            <div className={padding2}>Wind speed: {el ? (`${el[0].wind.speed}`) : (`${el2.wind.speed}`)}m/s</div>
        </>
    )
}

Card.propTypes = {
    dayTitle: PropTypes.string,
    padding: PropTypes.string,
    padding2: PropTypes.string,
    newDays: PropTypes.array,
    index: PropTypes.number,
    el: PropTypes.array,
    el2: PropTypes.object,
};
