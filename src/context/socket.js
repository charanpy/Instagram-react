import React, { createContext, useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import PropTypes from 'prop-types';

export const SocketContext = createContext({
  socket: '',
});

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState('');
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender?.current) {
      setSocket(
        io(process.env.REACT_APP_BASE_API, {
          transports: ['websocket'],
        })
      );
      firstRender.current = false;
    }
    return () => {
      if (socket) {
        socket.emit('disconnected');
        socket.removeAllListeners();
        socket.disconnect();
      }
    };
  }, [socket]);

  return (
    <SocketContext.Provider
      value={{
        socket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

SocketProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
