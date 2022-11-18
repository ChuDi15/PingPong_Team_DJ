import React from 'react';

const Seconds = (props) => {
    console.log(props.backgroundColor);
    return (
        <div className='border bg-primary'>
            <div style={{backgroundColor:props.backgroundColor}}></div>
        </div>
    );
}

export default Seconds;
