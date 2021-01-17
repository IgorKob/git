import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './../SearchWeather/SearchWeather.module.css';
import Card from './../Card/Card';
import { PropTypes } from 'prop-types';

const Day = React.memo(({searchArr, newDays }) => {

    const { id } = useParams();
    const num =  newDays[0].indexOf(id)

    return (
        <div className={classes.days}>
            {searchArr[num].map((el2, index2) => (<div key={String(index2)} className={classes.dayWrapper}>
                
                <Card dayTitle={classes.dayTitle}
                    el2={el2}
                    padding={classes.padding}
                    padding2={classes.padding2}
                />

            </div>))}
        </div>
    )
});

export default Day;

Day.propTypes = {
    searchArr: PropTypes.array,
    newDays: PropTypes.array,
};
