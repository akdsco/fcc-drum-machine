import React from "react";
import PropTypes from 'prop-types';

function ConsoleBtn(props) {

  return(
    <button data-test="component-console-btn">
      {props.pad.name.toUpperCase()}
    </button>
  )
}

ConsoleBtn.propTypes = {
  pad: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default ConsoleBtn;