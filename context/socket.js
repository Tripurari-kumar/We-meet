import { useState, useEffect, createContext, useContext } from 'react';
const { io } = require('socket.io-client');

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);

  return socket;
};

export const SocketProvider = (props) => {
  const { children } = props;
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const connection = io();
    setSocket(connection);
  }, []);

  socket?.on('connect_error', async (err) => {
    console.log('Error establishing socket', err);
    await fetch('/api/socket');
  });

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
