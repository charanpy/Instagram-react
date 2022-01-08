import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { displayGroupStart } from '../../redux-sagas/group/group.action';
import { selectUserProfile } from '../../redux-sagas/profile/profile.selector';
import Group from './Group.component';
import { ProfilePropTypes } from '../../helpers/helpers';
import { getIsCached } from '../../helpers/hooks/useLocalStorage';

const GroupContainer = ({ profile, displayGroupStart: displayGroup }) => {
  useEffect(() => {
    const { _id: id } = profile;
    if (!getIsCached()?.groups) displayGroup(id);
  }, [displayGroup, profile]);
  return <Group profile={profile} />;
};

GroupContainer.propTypes = {
  profile: ProfilePropTypes.isRequired,
  displayGroupStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profile: selectUserProfile,
});

const mapDispatchToProps = (dispatch) => ({
  displayGroupStart: (id) => dispatch(displayGroupStart(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(GroupContainer));
