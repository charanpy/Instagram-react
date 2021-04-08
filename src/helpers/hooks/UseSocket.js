import { useEffect, useCallback } from 'react';

const UseSocket = (socket, send, setNotification) => {
  const sendRealTimeMessage = useCallback(
    (groupId, message) => {
      send(groupId, message, socket);
    },
    [send, socket]
  );

  const sendRealTimeNotification = useCallback(() => {
    console.log('you got new notif');
    setNotification();
  }, [setNotification]);

  useEffect(() => {
    if (socket && localStorage.getItem('token')) {
      socket.on(
        'message',
        ({ groupId, message }) => sendRealTimeMessage(groupId, message)
        // eslint-disable-next-line
      );
    }
  }, [socket, sendRealTimeMessage]);

  useEffect(() => {
    if (socket) {
      console.log(socket, socket?.on);
      socket.on('notification', sendRealTimeNotification);
    }
  }, [socket, sendRealTimeNotification]);
};

export default UseSocket;