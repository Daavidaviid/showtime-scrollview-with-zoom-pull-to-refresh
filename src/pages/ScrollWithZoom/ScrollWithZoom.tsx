import {
  CollapsibleTabView,
  Route,
} from "@showtime-xyz/universal.collapsible-tab-view";
import { FunctionComponent, useCallback, useState } from "react";
import styled from "styled-components/native";
import { useSharedValue } from "react-native-reanimated";
import { StatusBarHeight, TabScene } from "./components/TabScene";
import { Platform } from "react-native";
import { BelowBanner } from "./components/BelowBanner";
import { BANNER_HEIGHT_IN_PX } from "./services";
import { DUMMY_HEADER_HEIGHT, Header } from "./components/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const renderScene = ({ route }: any) => {
  switch (route.key) {
    case "like":
      return <TabScene route={route} index={0} />;

    case "owner":
      return <TabScene route={route} index={1} />;

    case "created":
      return <TabScene route={route} index={2} />;

    default:
      return null;
  }
};

export const ScrollWithZoom: FunctionComponent = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [routes] = useState<Route[]>([
    { key: "like", title: "Like", index: 0 },
    { key: "owner", title: "Owner", index: 1 },
    { key: "created", title: "Created", index: 2 },
  ]);
  const [index, setIndex] = useState(0);
  const scrollY = useSharedValue(0);
  const translateYValue = useSharedValue(0);
  const { top: topInset } = useSafeAreaInsets();

  const onStartRefresh = async () => {
    setIsRefreshing(true);
    setTimeout(() => {
      console.log("onStartRefresh");
      setIsRefreshing(false);
    }, 300);
  };

  const renderScrollHeader = useCallback(() => <EmptyBanner />, []);

  return (
    <Container>
      <BelowBanner
        scrollY={scrollY}
        translateYValue={translateYValue}
        recipeThumbnailUrl="https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg"
      />
      <CollapsibleTabView
        onStartRefresh={onStartRefresh}
        isRefreshing={isRefreshing}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        lazy
        renderScrollHeader={renderScrollHeader}
        overridenScrollY={scrollY}
        overridenTranslateYValue={translateYValue}
        minHeaderHeight={topInset + DUMMY_HEADER_HEIGHT + StatusBarHeight}
        style={Platform.select({
          web: { flex: "none" } as any,
          default: undefined,
        })}
      />
      <Header scrollY={scrollY} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const EmptyBanner = styled.View`
  height: ${BANNER_HEIGHT_IN_PX}px;
`;
