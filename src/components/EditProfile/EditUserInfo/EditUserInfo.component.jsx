import React from 'react';
import PropTypes from 'prop-types';
import { EditProfile, Input } from '../../../helpers/helpers';
import InputComponent from '../../shared/Input/Input.component';
import Button from '../../shared/Button/Button.component';
import { InputContainer } from '../Edit.style';

const EditUserInfoComponent = ({
  profile: { name, bio, website },
  nameRef,
  bioRef,
  websiteRef,
  handleSubmit
}) => (
  <InputContainer>
    <InputComponent
      name='name'
      type='text'
      placeholder='Name'
      ref={nameRef}
      defaultValue={name}
    />
    <InputComponent
      name='bio'
      type='text'
      placeholder='Bio'
      ref={bioRef}
      defaultValue={bio}
    />
    <InputComponent
      name='Websitw'
      type='text'
      placeholder='Website'
      ref={websiteRef}
      defaultValue={website}
    />
    <Button type='submit' text='Edit' handleSubmit={handleSubmit} />
  </InputContainer>
);
EditUserInfoComponent.propTypes = {
  profile: EditProfile.isRequired,
  name: PropTypes.string,
  bio: PropTypes.string,
  website: PropTypes.string,
  nameRef: Input.isRequired,
  bioRef: Input.isRequired,
  websiteRef: Input.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

EditUserInfoComponent.defaultProps = {
  bio: '',
  website: '',
  name: '',
};

export default EditUserInfoComponent;
