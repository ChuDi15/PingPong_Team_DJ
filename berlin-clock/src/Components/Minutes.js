import React from 'react';
import MinuteBox from './MinuteBox';
import "./style.css"

const Minutes = (props) => {

    console.log(props.minuteBox)
    return (
        <div className='Minutes'>
            <MinuteBox backgroundColor={props.minuteBox[0]} />
            <MinuteBox backgroundColor={props.minuteBox[1]} />
            <MinuteBox backgroundColor={props.minuteBox[2]} />
            <MinuteBox backgroundColor={props.minuteBox[3]} />
            <MinuteBox backgroundColor={props.minuteBox[4]} />
            <MinuteBox backgroundColor={props.minuteBox[5]} />
            <MinuteBox backgroundColor={props.minuteBox[6]} />
            <MinuteBox backgroundColor={props.minuteBox[7]} />
            <MinuteBox backgroundColor={props.minuteBox[8]} />
            <MinuteBox backgroundColor={props.minuteBox[9]} />
            <MinuteBox backgroundColor={props.minuteBox[10]} />
            <MinuteBox backgroundColor={props.minuteBox[11]} />
        </div>
    );
}

export default Minutes;
