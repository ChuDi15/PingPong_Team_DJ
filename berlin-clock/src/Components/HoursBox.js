import React from 'react';

const HoursBox = (props) => {
  return (
    <div className=" border bg-primary">
      <div className="HoursBlock" style={{ backgroundColor: props.backgroundColor }}></div>
    </div>
  );
}

export default HoursBox;
