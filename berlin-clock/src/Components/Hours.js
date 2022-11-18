import React from 'react';
import HoursBox from './HoursBox';

const Hours = (props) => {

  console.log(props.hourBox)
  return (
    <div className='Hours'>
      <HoursBox backgroundColor={props.hourBox[0]} />
      <HoursBox backgroundColor={props.hourBox[1]} />
      <HoursBox backgroundColor={props.hourBox[2]} />
      <HoursBox backgroundColor={props.hourBox[3]} />
    </div>
  );
}

export default Hours;
