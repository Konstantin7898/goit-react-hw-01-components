import { PropTypes } from 'prop-types';
import { FriendsCard, Status } from '../FriendList/FriendList.styled';
export const FriendCard = ({ avatar, name, isOnline }) => {
  return (
    <FriendsCard>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendsCard>
  );
};

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
