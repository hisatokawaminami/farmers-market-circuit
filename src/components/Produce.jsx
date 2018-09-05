import React from 'react';
import PropTypes from 'prop-types';

function Produce(props) {
  return (
    <div>
      <h4>{props.month}</h4>

    <ul>{props.selection.map((produce,index) =>
          <li key={index}>{produce}</li>)}</ul>
    </div>
  );
}
Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired
};

export default Produce;
