import  PropTypes  from 'prop-types';

import { Friends } from "./FriendsList.styled";
import { FriendListItem } from '../FriendsListItem/FriendListItem';

export const FriendList = ({ friends }) => {



  return (
    <Friends>
      {friends.map((friend) => {
        return (
          <FriendListItem key={friend.id} {...friend}/>
        );
      })}
    </Friends>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired
    })
  ).isRequired
};