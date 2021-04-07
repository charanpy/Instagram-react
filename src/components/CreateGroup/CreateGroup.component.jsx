import React from 'react';
import { Container, ButtonWrapper, SendMessage } from './CreateGroup.style';
import Icon from '../shared/Icon/Icon.component';

const CreateGroup = () => {
  console.log('Create Group');
  return (
    <Container>
      <Icon className='fas fa-paper-plane' fontSize={5} />
      <ButtonWrapper>
        <SendMessage>Send Messages to your friends</SendMessage>
      </ButtonWrapper>
    </Container>
  );
};

export default CreateGroup;
