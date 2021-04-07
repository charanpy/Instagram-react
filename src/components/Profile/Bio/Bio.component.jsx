import React from 'react';
import PropTypes from 'prop-types';
import { BioContainer, BioDetail } from './Bio.style';

const Bio = ({ name, website, bio }) => {
  console.log('Bio');
  return (
    <BioContainer>
      <BioDetail>{name}</BioDetail>
      <BioDetail>{bio && bio}</BioDetail>
      <BioDetail as='a'>{website && website}</BioDetail>
    </BioContainer>
  );
};

Bio.propTypes = {
  name: PropTypes.string.isRequired,
  website: PropTypes.string,
  bio: PropTypes.string,
};

Bio.defaultProps = {
  bio: '',
  website: '',
};

export default Bio;
