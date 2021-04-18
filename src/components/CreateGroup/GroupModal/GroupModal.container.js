import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProfileId } from '../../../redux-sagas/profile/profile.selector';
import { createGroupStart } from '../../../redux-sagas/group/group.action';
import GroupModal from './GroupModal.component';
// eslint-disable-next-line
const CancelToken = axios.CancelToken;
let cancel;

const GroupModalContainer = ({
  modal,
  toggleModal,
  createGroupStart: createGroup,
  id,
  profile,
}) => {
  const history = useHistory();
  const [searchUser, setSearchUser] = useState({
    input: '',
    loading: false,
    users: [],
    defaultUsers: [],
  });
  const { input, loading, users, defaultUsers } = searchUser;
  console.log(defaultUsers);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}profile/`).then((res) =>
      setSearchUser((user) => ({
        ...user,
        defaultUsers: res.data.data.profiles,
      }))
    );
  }, []);
  useEffect(() => {
    if (!users.length && defaultUsers.length) {
      setSearchUser((user) => ({
        ...user,
        users: defaultUsers,
      }));
    }
    // eslint-disable-next-line
  }, [users.length, defaultUsers.length, input]);
  useEffect(() => {
    if (cancel !== undefined) {
      cancel();
    }

    if (input) {
      setSearchUser((data) => ({
        ...data,
        loading: true,
      }));
      axios
        .get(`${process.env.REACT_APP_API}profile/search/`, {
          cancelToken: new CancelToken((c) => {
            cancel = c;
          }),
          params: {
            find: input,
          },
        })
        .then((response) => {
          setSearchUser((data) => ({
            ...data,
            loading: false,
            users: response.data.users,
          }));
          console.log(response.data);
        })
        .catch((e) => {
          console.error(e);
          setSearchUser((data) => ({
            ...data,
            loading: false,
            users: [],
          }));
        });
    }
    return () => {
      if (cancel !== undefined) cancel();
    };
  }, [input]);
  const onHandleChange = (e) => {
    setSearchUser({
      ...searchUser,
      input: e.target.value,
    });
  };

  const newGroup = (profileId, userId) => {
    toggleModal();
    createGroup(profileId, userId);
  };

  const navigateSelectedProfile = (name) => {
    toggleModal();
    history.push(name);
  };
  return (
    <GroupModal
      modal={modal}
      toggleModal={toggleModal}
      searchUser={searchUser}
      handleChange={onHandleChange}
      loading={loading}
      createGroup={newGroup}
      navigate={navigateSelectedProfile}
      id={id}
      profile={profile}
    />
  );
};

GroupModalContainer.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  createGroupStart: PropTypes.func.isRequired,
  id: PropTypes.string,
  profile: PropTypes.bool,
};

GroupModalContainer.defaultProps = {
  profile: false,
  id: '123',
};
const mapStateToProps = createStructuredSelector({
  id: selectProfileId,
});
const mapDispatchToProps = (dispatch) => ({
  createGroupStart: (userId, id) => dispatch(createGroupStart(userId, id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupModalContainer);
