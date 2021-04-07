import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Spinner from '../../components/shared/Spinner/Spinner.component';
import { selectIsLoading } from '../../redux-sagas/profile/profile.selector';
import EditProfile from './Edit.page';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});

const ProfileLoader = compose(connect(mapStateToProps), Spinner)(EditProfile);

export default ProfileLoader;
