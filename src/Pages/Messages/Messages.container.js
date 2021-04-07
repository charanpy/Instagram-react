import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectChannelLoading } from '../../redux-sagas/group/group.selector';
import Message from './Message.page';
import Spinner from '../../components/shared/Spinner/Spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectChannelLoading,
});

const MessagesContainer = compose(connect(mapStateToProps), Spinner)(Message);

export default MessagesContainer;
