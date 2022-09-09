import React, { FunctionComponent } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const DUMMY_HEADER_HEIGHT = 50;

type Props = {
  scrollY: Animated.SharedValue<number>;
};
export const Header: FunctionComponent<Props> = ({ scrollY }) => {
  const { top: topInset } = useSafeAreaInsets();
  const headerStyle = useAnimatedStyle(
    () => ({
      opacity: interpolate(scrollY.value, [0, 100], [0, 1]),
    }),
    []
  );

  return <DummyHeader style={headerStyle} $topInset={topInset} />;
};

const DummyHeader = styled(Animated.View)<{ $topInset: number }>`
  background-color: #4995ec;
  height: ${({ $topInset }) => $topInset + DUMMY_HEADER_HEIGHT}px;
  width: 100%;
  position: absolute;
  top: 0;
`;
