import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import ContrastColor from 'contrast-color';

const AccountWrapper = styled.View`
  width: 95%;
  height: 250px;

  border-radius: 20px;
  background-color: ${props => props.background};

  margin-top: 10px;
`;

const AccountName = styled.Text`
  font-size: 20px;
  font-family: sans-serif;
  
  position: relative;
  top: 15px;
  left: 20px;

  color: ${props => props.textColor};
`;

const AccountBalance = styled.Text`
  font-size: 36px;
  text-align: right;
  font-weight: 700;

  color: ${props => props.textColor};

  position: absolute;
  bottom: 15px;
  right: 25px;
`;

export default function Account(props) {

  const cc = new ContrastColor({
    bgColor: props.background
  })

  return (
    <AccountWrapper background={props.background}>
      <AccountName textColor={() => cc.contrastColor()}>{props.name}</AccountName>
      <AccountBalance textColor={() => cc.contrastColor()}>{props.balance + "$"}</AccountBalance>
    </AccountWrapper>
  )
}