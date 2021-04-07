import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAlertMessage } from '../../../redux-sagas/alert/alert.selector';
import ButtonContainer from './Button.style';

const Button = ({ text, handleSubmit, type, alert, width, danger }) => (
  <ButtonContainer
    disabled={alert.length}
    onClick={handleSubmit}
    type={type}
    width={width}
    danger={danger}
  >
    {text}
  </ButtonContainer>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  type: PropTypes.string,
  alert: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      msg: PropTypes.string.isRequired,
    })
  ),
  width: PropTypes.number,
  danger: PropTypes.bool,
};

Button.defaultProps = {
  type: 'text',
  alert: [],
  width: 22,
  danger: false,
};

const mapStateToProps = createStructuredSelector({
  alert: selectAlertMessage,
});
export default connect(mapStateToProps)(Button);
