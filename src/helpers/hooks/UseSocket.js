import { useEffect } from 'react';

const UseSocket = (socket, send) => {
  useEffect(() => {
    if (socket && localStorage.getItem('token')) {
      console.log(socket);
      socket.on('message', ({ groupId, message }) => {
        console.log(groupId, message);
        send(groupId, message, socket);
      });
      socket.on('notification', (data) => console.log(1, data));
    }
  }, [socket, send]);
};

export default UseSocket;
