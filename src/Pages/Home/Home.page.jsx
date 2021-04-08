import React from 'react';
import { HomeContainer, Wrap } from './Home.style';
import Theme from '../../components/Theme/Theme';
import Logout from '../../components/shared/Logout/Logout.component';
import Post from '../../components/Post/DisplayPost/Post.loader';

const Home = () => {
  console.log('Home');
  return (
    <HomeContainer>
      <Wrap>
        <Theme />
        <Post />
        <Logout />
      </Wrap>
    </HomeContainer>
  );
};

export default Home;
