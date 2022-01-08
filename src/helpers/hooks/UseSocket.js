import { useEffect, useCallback } from 'react';
import { setIsCached } from './useLocalStorage';

const UseSocket = (socket, send, setNotification) => {
  const sendRealTimeMessage = useCallback(
    (groupId, message) => {
      send(groupId, message, socket);
    },
    [send, socket]
  );

  const sendRealTimeNotification = useCallback(() => {
    console.log('you got new notif');
    setIsCached('notifications', false);
    setNotification();
  }, [setNotification]);

  useEffect(() => {
    if (socket && localStorage.getItem('token')) {
      socket.on(
        'message',
        ({ groupId, message }) => sendRealTimeMessage(groupId, message)
        // eslint-disable-next-line
      );
      return () => {
        socket.off('message', sendRealTimeMessage);
      };
    }
    return false;
  }, [socket, sendRealTimeMessage]);

  useEffect(() => {
    if (socket) {
      socket.on('notification', sendRealTimeNotification);
      return () => {
        socket.off('notification', sendRealTimeNotification);
      };
    }
    return false;
  }, [socket, sendRealTimeNotification]);
};

export default UseSocket;
