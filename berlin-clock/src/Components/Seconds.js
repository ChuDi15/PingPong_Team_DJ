import React from 'react';
import "./style.css"

const Seconds = (props) => {
    console.log(props.backgroundColor);
    return (
        <div>

            <div className='SecondsBlock' style={{ backgroundColor: props.backgroundColor }}> </div>
        </div>
    );
}

export default Seconds;
