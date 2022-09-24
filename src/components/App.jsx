import { Profile } from 'components/profile/Profile';
import users from '../components/user.json';

export const App = () => {
  console.log(users);

  return (
    <div
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
    </div>
  );
};
