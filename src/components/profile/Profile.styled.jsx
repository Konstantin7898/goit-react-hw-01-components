import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 300px;
  heigth: 500px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
  background-color: #fff;
`;

export const Description = styled.div``;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: red;
  margin-top: 20px;
`;

export const Name = styled.p`
  color: #212121;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.18;
  letter-spacing: 0.03em;
  margin-bottom: 0;
`;

export const Tag = styled.p`
  color: #757575;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.18;
  letter-spacing: 0.03em;
  margin: 10px 0 0 0;
`;

export const Location = styled.p`
  color: #757575;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.18;
  letter-spacing: 0.03em;
  margin: 10px 0 0 0;
`;

export const Stats = styled.ul`
  text-align: center;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
  background-color: #f5f4fa;
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const StatsList = styled.li`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: calc(33.3333%);
  border-right: 1px solid rgb(255, 255, 255);
  border-left: 1px solid rgb(255, 255, 255);
`;

export const StatsLabel = styled.li`
  color: #757575;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.18;
  letter-spacing: 0.03em;
`;

export const StatsQuantity = styled.li`
  color: black;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.18;
  letter-spacing: 0.03em;
`;
