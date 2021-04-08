import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Spinner from '../../shared/Spinner/Spinner.component';
import {
  selectPostLoading,
  selectPosts,
} from '../../../redux-sagas/profile/profile.selector';
import Post from './Post.container';

const mapStateToProps = createStructuredSelector({
  isLoading: selectPostLoading,
  posts: selectPosts,
});

const PostLoader = compose(connect(mapStateToProps), Spinner)(Post);

export default PostLoader;
