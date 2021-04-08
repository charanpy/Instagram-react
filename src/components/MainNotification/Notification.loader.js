import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Spinner from '../shared/Spinner/Spinner.component';
import { selectIsLoading } from '../../redux-sagas/profile/profile.selector';
import Notification from './Notification.container';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});

const NotificationLoader = compose(
  connect(mapStateToProps),
  Spinner
)(Notification);

export default NotificationLoader;
