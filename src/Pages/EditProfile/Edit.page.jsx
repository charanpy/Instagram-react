import React from 'react';
import { MainContainer, Wrapper } from '../../helpers/CommonStyles';
import EditProfileComponent from '../../components/EditProfile/Edit.container';

const EditProfile = () => {
  console.log('edit page');
  return (
    <MainContainer>
      <Wrapper>
        <EditProfileComponent />
      </Wrapper>
    </MainContainer>
  );
};

export default EditProfile;
