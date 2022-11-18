import React from 'react';

const MinuteBox = (props) => {
    return (
        <div className=" border bg-primary">
            <div className="MinuteBlock" style={{ backgroundColor: props.backgroundColor }}></div>
        </div>
    );
}

export default MinuteBox;
