import { PropTypes } from 'prop-types';

import { Status } from './FriendListItem.styled';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li id={id}>
      <Status status={isOnline}></Status>
      <img src={avatar} alt="User Avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
