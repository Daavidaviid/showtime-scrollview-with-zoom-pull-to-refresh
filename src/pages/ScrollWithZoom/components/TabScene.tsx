import { TabFlatList } from "@showtime-xyz/universal.collapsible-tab-view";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const StatusBarHeight = StatusBar.currentHeight ?? 0;
export const TabScene = ({ route }: any) => {
  return (
    <TabFlatList
      index={route.index}
      data={new Array(20).fill(0)}
      renderItem={({ index }) => {
        return (
          <ItemContainer>
            <Title>{`${route.title}-Item-${index}`}</Title>
          </ItemContainer>
        );
      }}
    />
  );
};

const ItemContainer = styled.View`
  height: 60px;
  background-color: #fff;
  padding-bottom: 8px;
  justify-content: center;
  align-items: center;
  border: solid 1px red;
`;

const Title = styled.Text`
  font-size: 18px;
`;
