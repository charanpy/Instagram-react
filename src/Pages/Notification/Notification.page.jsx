import React from 'react';
import Container from '../Messages/Messages.style';
import DisplayNotification from '../../components/MainNotification/Notification.loader';

const Notification = () => {
  console.log('notif page');
  return <Container><DisplayNotification /></Container>;
};

export default Notification;
