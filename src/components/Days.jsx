import React from 'react';
import PropTypes from 'prop-types';

const Days = (props) => {
  return (
    <div>
      <h4>{props.day}</h4>
      <li>{props.location} -- {props.booth}</li>
      <li>{props.hours}</li>
    </div>
  );
};

Days.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired
};

export default Days;
