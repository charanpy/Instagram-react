import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  HeaderContainer,
  IconContainer,
  Notify,
  Button,
  Name,
} from './Header.style';
import Brand from '../Brand/Brand.component';
import Icon from '../Icon/Icon.component';
import Notification from '../../MainNotification/Navigate/Navigate.container';
import GroupModal from '../../CreateGroup/GroupModal/GroupModal.container';
import UseModalState from '../Modal/Modal.state';

const Header = ({ history, notify, username }) => {
  const [modal, toggleModal] = UseModalState();

  if (history.location.pathname === '/auth') {
    return null;
  }

  return (
    <HeaderContainer>
      <Link to='/'>
        <Name>
          <Brand />
        </Name>
      </Link>
      <IconContainer>
        <Link to='/'>
          <Icon
            className='fas fa-home'
            active={history.location.pathname === '/'}
          />
        </Link>
        <Button onClick={toggleModal}>
          <Icon className='fas fa-search' />
        </Button>
        <Notification />
        <Link to='/create/post'>
          <Icon
            className='fas fa-plus-circle'
            active={history.location.pathname === '/create/post'}
          />
        </Link>
        <Link to={`/${username}`}>
          <Icon
            className='fas fa-user'
            active={history.location.pathname === `/${username}`}
          />
          {notify ? <Notify>{notify}</Notify> : <div />}
        </Link>
        <Link to='/direct/message'>
          <Icon
            className='fas fa-paper-plane'
            active={history.location.pathname === '/direct/message'}
          />
          {notify ? <Notify>{notify}</Notify> : <div />}
        </Link>
      </IconContainer>
      <GroupModal modal={modal} toggleModal={toggleModal} profile />
    </HeaderContainer>
  );
};

Header.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  }).isRequired,
  notify: PropTypes.number.isRequired,
  username: PropTypes.string,
};

Header.defaultProps = {
  username: '',
};
export default withRouter(Header);
