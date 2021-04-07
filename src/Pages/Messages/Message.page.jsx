import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getMessageStart,
  setMessageSeenStart,
} from '../../redux-sagas/group/group.action';
import MessageContainer from './Messages.style';
import MessagesWrapper from '../../components/Messages/Messages.container';
import UseSocket from './MessagesService';

const Message = ({
  match: {
    params: { id },
  },
  getMessageStart: getMessage,
  setMessageSeenStart: setMessageSeen,
}) => {
  console.log('Message');
  UseSocket(id, getMessage, setMessageSeen);

  return (
    <MessageContainer>
      <MessagesWrapper />
    </MessageContainer>
  );
};

Message.propTypes = {
  getMessageStart: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  setMessageSeenStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getMessageStart: (groupId) => dispatch(getMessageStart(groupId)),
  setMessageSeenStart: (groupId) => dispatch(setMessageSeenStart(groupId)),
});

export default connect(null, mapDispatchToProps)(React.memo(Message));

// useEffect(() => {
//     if (id) {
//       getMessage(id);
//     }
//   }, [getMessage, id, socket]);
//   useEffect(() => {
//     socket.on('message', ({ groupId, message }) => {
//       if (groupId === id) {
//         console.log('Message read', message);
//         setMessageSeen(id);
//         socket.emit('render', id);
//       }
//     });
//   }, [id, setMessageSeen]);
//   useEffect(() => {
//     socket.emit('seen', id);
//   }, [id, socket]);
//   useEffect(() => {
//     socket.on('render', (groupId) => {
//       if (id === groupId) {
//         console.log('message render');
//         getMessage(id);
//       }
//     });
//   }, [id, getMessage]);
//   useEffect(() => {
//     socket.on('seen', (groupId) => {
//       if (id === groupId) {
//         console.log('message render');
//         getMessage(id);
//       }
//     });
//   }, [id, getMessage]);
