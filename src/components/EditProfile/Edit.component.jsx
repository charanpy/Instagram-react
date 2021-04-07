import React from 'react';
import EditImage from './EditImage/EditImage.container';
import EditInfo from './EditUserInfo/EditUserInfo.container';

const EditComponent = () => {
  console.log('Edit comp');
  return (
    <>
      <EditImage />
      <EditInfo />
    </>
  );
};

export default EditComponent;
