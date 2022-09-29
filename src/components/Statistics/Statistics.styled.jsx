import styled from 'styled-components';

export const Container = styled.section`
  width: 300px;
  heigth: 500px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
`;

export const StatList = styled.ul`
  text-align: center;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  width: 100%;
  height: 60px;
  font-weight: 500;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const StatCardList = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60px;
  text-align: center;
  width: calc(33.3333%);
  border-right: 1px solid rgb(255, 255, 255);
  border-left: 1px solid rgb(255, 255, 255);
  background-color: #${props => props.color};
`;

export const Label = styled.span`
  color: #757575;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.18;
  letter-spacing: 0.03em;
  margin: 10px 0 0 0;
  color: #fff;
`;

export const Percentage = styled.span`
  color: #757575;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.18;
  letter-spacing: 0.03em;
  margin: 10px 0 10px 0;
  color: #fff;
`;
