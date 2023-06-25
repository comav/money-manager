import {View, Text} from "react-native";
import styled from "styled-components/native";

const LegendDot = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: ${props => props.color};
`;

LegendDot.defaultProps = {
  color: "cyan"
}

const LegendText = styled.Text`
  font-size: 20px;
  font-family: Inter_400Regular;
`;

const LegendItemWrapper = styled.View`
  display: flex;
  height: 35px;
  width: 95%;
  margin-left: 39px;
  gap: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export default function LegendItem() {
  return (
    <LegendItemWrapper>
      <LegendDot />
      <LegendText>
        200$
      </LegendText>
      <LegendText>
        Free
      </LegendText>
    </LegendItemWrapper>
  )
}