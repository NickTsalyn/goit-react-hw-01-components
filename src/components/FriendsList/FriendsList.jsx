import { Friends } from "./FriendsList.styled";
import  PropTypes  from 'prop-types';

export const FriendList = ({ friends }) => {



  return (
    <Friends>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li>
            <span status={isOnline}></span>
            <img src={avatar} alt="User Avatar" width="48"/>
            <p>{name}</p>
          </li>
        );
      })}
    </Friends>
  );
};


Friends.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
  })
}