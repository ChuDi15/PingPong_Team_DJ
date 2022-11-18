import React from 'react';
import MinuteBox from './MinuteBox';
import "./style.css"

const MinutesSmall = (props) => {

    console.log(props.minuteBox)
    return (
        <div className='Minutes'>
            <MinuteBox backgroundColor={props.minuteBox[0]} />
            <MinuteBox backgroundColor={props.minuteBox[1]} />
            <MinuteBox backgroundColor={props.minuteBox[2]} />
            <MinuteBox backgroundColor={props.minuteBox[3]} />
        </div>
    );
}

export default MinutesSmall;
