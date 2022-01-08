import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Spinner from '../components/shared/Spinner/SpinnerOverlay.component';
import ErrorBoundary from '../components/error-boundary/Error-boundary.component';

const Home = lazy(() => import('../Pages/Home/Home.container'));
const Auth = lazy(() => import('../Pages/Auth/Auth.container'));
const Chat = lazy(() => import('../Pages/Chat/Chat.container'));
const Message = lazy(() => import('../Pages/Messages/Messages.container'));
const Profile = lazy(() => import('../Pages/Profile/Profile.container'));
const EditProfile = lazy(() => import('../Pages/EditProfile/Edit.container'));
const DisplayAPost = lazy(() =>
  import('../components/Post/DisplayAPost/DisplayAPost.container')
);
const Notify = lazy(
  () => import('../Pages/Notification/Notification.container')
  // eslint-disable-next-line
);
const Post = lazy(() => import('../Pages/Post/Post.page'));

const AppRoute = () => (
  <Switch>
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <PrivateRoute exact path='/' component={Home} routeName='home' />
        <Route exact path='/auth' component={Auth} />
        <PrivateRoute exact path='/direct/message' component={Chat} />
        <PrivateRoute exact path='/create/post' component={Post} />
        <PrivateRoute exact path='/me/notification' component={Notify} />
        <PrivateRoute exact path='/message/:id' component={Message} />
        <PrivateRoute exact path='/profile/edit' component={EditProfile} />
        <PrivateRoute exact path='/post/:id' component={DisplayAPost} />
        <PrivateRoute exact path='/:name' component={Profile} />
      </Suspense>
    </ErrorBoundary>
  </Switch>
);

export default AppRoute;
