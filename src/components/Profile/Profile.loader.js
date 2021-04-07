import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Spinner from '../shared/Spinner/Spinner.component';
import { selectFetchProfile } from '../../redux-sagas/profile/profile.selector';
import Profile from './Profile.container';

const mapStateToProps = createStructuredSelector({
  isLoading: selectFetchProfile,
});

const GroupLoader = compose(connect(mapStateToProps), Spinner)(Profile);

export default GroupLoader;
