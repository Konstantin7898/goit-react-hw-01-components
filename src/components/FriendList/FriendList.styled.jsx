import styled from 'styled-components';

export const FriendLi = styled.ul`
  text-align: center;

  border-radius: 0px 0px 4px 4px;
  list-style-type: none;
  padding: 0;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  background-color: #dfdede;
  border-radius: 10px;
  padding: 12px;
  gap: 20px;
  box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px,
    rgb(0 0 0 / 30%) 0px 30px 60px -30px,
    rgb(10 37 64 / 35%) 0px -2px 6px 0px inset; ;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${props => {
    return props.isOnline ? `green` : `red`;
  }};
`;

export const FriendsCard = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  background-color: #dfdede;
  border-radius: 10px;
  padding: 12px;
  gap: 20px;
  box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px,
    rgb(0 0 0 / 30%) 0px 30px 60px -30px,
    rgb(10 37 64 / 35%) 0px -2px 6px 0px inset; ;
`;
