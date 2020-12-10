import React, { useEffect, useState } from 'react'
import moment from 'moment';
import './Timer.css';

const Timer = (props) => {
   
    // <Timer timeTillDate="01 01 2020, 0:00 am" timeFormat="MM DD YYYY, h:mm a" />
    // const { timeTillDate, timeFormat } = props;
    const timeTillDate = "01 01 2020, 0:00 am"; 
    const timeFormat = "MM DD YYYY, h:mm a";
    
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    useEffect(() => {

      const interval = setInterval(() => {
        const then = moment(timeTillDate, timeFormat);
        const now = moment();
        const countdown = moment(then - now);

        setDays(countdown.format('D'));
        setHours(countdown.format('HH'));
        setMinutes(countdown.format('mm'));
        setSeconds(countdown.format('ss'))

    }, 1000);

    return () => interval ? clearInterval(interval) : '';
    }, [seconds]);



    // Mapping the date values to radius values
    const daysRadius = mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    if (!seconds) {
        return null;
    }

    return (
        <div>
        <h1>Countdown</h1>
        <div className="countdown-wrapper">
            {days && (
                <div className="countdown-item">
                    <SVGCircle radius={daysRadius} />
                    {days}
                    <span>days</span>
                </div>
            )}
            {hours && (
                <div className="countdown-item">
                    <SVGCircle radius={hoursRadius} />
                    {hours}
                    <span>hours</span>
                </div>
            )}
            {minutes && (
                <div className="countdown-item">
                    <SVGCircle radius={minutesRadius} />
                    {minutes}
                    <span>minutes</span>
                </div>
            )}
            {seconds && (
                <div className="countdown-item">
                    <SVGCircle radius={secondsRadius} />
                    {seconds}
                    <span>seconds</span>
                </div>
            )}
        </div>
    </div>
    )
}

export default Timer;


// 
const SVGCircle = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#333"
            stroke-width="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </svg>
);

// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');

    return d;
}

// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}

