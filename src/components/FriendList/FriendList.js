import PropTypes from 'prop-types';
import { FriendCard } from '../FriendList/FriendListItem';
import { FriendLi } from '../FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendLi>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendCard
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        ></FriendCard>
      ))}
    </FriendLi>
  );
};

FriendList.propTypes = {
  riends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
