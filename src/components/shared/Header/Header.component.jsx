import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HeaderContainer, IconContainer, Notify, Button } from './Header.style';
import Brand from '../Brand/Brand.component';
import Icon from '../Icon/Icon.component';
import GroupModal from '../../CreateGroup/GroupModal/GroupModal.container';
import UseModalState from '../Modal/Modal.state';

const Header = ({ history, notify, username }) => {
  const [modal, toggleModal] = UseModalState();

  if (history.location.pathname === '/auth') {
    return null;
  }

  return (
    <HeaderContainer>
      <Brand />
      <IconContainer>
        <Link to='/'>
          <Icon
            className='fas fa-home'
            active={history.location.pathname === '/'}
          />
        </Link>
        <Link to='/direct/message'>
          <Icon
            className='fas fa-paper-plane'
            active={history.location.pathname === '/direct/message'}
          />
          {notify ? <Notify>{notify}</Notify> : <div />}
        </Link>
        <Button onClick={toggleModal}>
          <Icon className='fas fa-search' />
        </Button>
        <Link to={`/${username}`}>
          <Icon
            className='fas fa-user'
            active={history.location.pathname === `/${username}`}
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
