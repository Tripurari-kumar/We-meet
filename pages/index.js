import { useSocket } from '@/context/socket';
import usePeer from '@/hooks/usePeer';
import { useEffect } from 'react';

export default function Home() {
  const socket = useSocket();
  usePeer();

  useEffect(() => {
    socket?.on('connect', () => {
      console.log(socket.id);
    });
  }, [socket]);
  return <>hi</>;
}
