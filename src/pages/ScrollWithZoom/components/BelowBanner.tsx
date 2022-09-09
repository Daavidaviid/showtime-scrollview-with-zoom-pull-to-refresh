import React, { FunctionComponent } from "react";
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import styled from "styled-components/native";
import { BANNER_HEIGHT_IN_PX } from "../services";

type Props = {
  recipeThumbnailUrl: string | undefined;
  translateYValue: SharedValue<number>;
  scrollY: SharedValue<number>;
};
export const BelowBanner: FunctionComponent<Props> = ({
  recipeThumbnailUrl,
  translateYValue,
  scrollY,
}) => {
  const containerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          translateYValue.value,
          [0, 300],
          [1, 3],
          Extrapolate.EXTEND
        ),
      },
      {
        translateY: interpolate(
          scrollY.value,
          [0, 300],
          [0, -300],
          Extrapolate.EXTEND
        ),
      },
    ],
  }));

  return (
    <Container style={containerStyle}>
      <Image resizeMode="cover" source={{ uri: recipeThumbnailUrl }} />
    </Container>
  );
};

const Container = styled(Animated.View)``;
const Image = styled.Image`
  position: absolute;
  height: ${BANNER_HEIGHT_IN_PX}px;
  width: 100%;
`;
