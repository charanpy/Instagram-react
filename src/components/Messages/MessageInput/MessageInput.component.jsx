import React from 'react';
import PropTypes from 'prop-types';
import { Footer, SendMessage, Message as Input } from './MessageInput.style';
import Icon from '../../shared/Icon/Icon.component';

const MessageInput = ({ message, handleSubmit }) => {
  console.log('Input');
  return (
    <Footer onSubmit={handleSubmit}>
      <Input
        name='message'
        placeholder='Type a message'
        ref={message}
        autoComplete='off'
      />
      <SendMessage type='submit'>
        <Icon className='fas fa-paper-plane' />
      </SendMessage>
    </Footer>
  );
};

MessageInput.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: null }),
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
  handleSubmit: PropTypes.func.isRequired,
};

MessageInput.defaultProps = {
  message: null,
};

export default MessageInput;
