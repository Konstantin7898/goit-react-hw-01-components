import { Profile } from 'components/profile/Profile';
import users from '../Utils/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from '../Utils/data.json';
import { FriendList } from '../components/FriendList/FriendList';
import friends from '../Utils/friends.json';
import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory';
import transactions from '../Utils/transactions.json';
import { Wrapper } from './profile/Profile.styled';

export const App = () => {
  console.log(users);

  return (
    <Wrapper
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      {/* <Profile user={users[0]} /> */}
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        stats={users.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </Wrapper>
  );
};
