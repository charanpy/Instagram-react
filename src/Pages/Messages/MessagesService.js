import { useEffect, useContext, useCallback } from 'react';
import { SocketContext } from '../../context/socket';

const UseSocket = (id, getMessage, setMessageSeen) => {
  const { socket } = useContext(SocketContext);
  const handleMessageSeen = useCallback(() => {
    setMessageSeen(id);
    socket.emit('render', id);
  }, [id, setMessageSeen, socket]);

  const handleRenderMessage = useCallback(() => {
    if (id) getMessage(id);
  }, [getMessage, id]);

  useEffect(() => {
    if (id) {
      getMessage(id);
    }
    socket.emit('seen', id);
    socket.on('message', handleMessageSeen);
    return () => {
      socket.off('message', handleMessageSeen);
    };
  }, [id, getMessage, handleMessageSeen, socket]);

  useEffect(() => {
    socket.on('render', handleRenderMessage);
    return () => {
      socket.off('render', handleRenderMessage);
    };
  }, [socket, handleRenderMessage]);
  useEffect(() => {
    socket.on('seen', handleRenderMessage);
    return () => {
      socket.off('seen', handleRenderMessage);
    };
  }, [socket, handleRenderMessage]);
};

export default UseSocket;
