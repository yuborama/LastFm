import Lottie from "lottie-react-native";
import SplashArtAnimation from "assets/lotties/splash-loading.json";
import { AtomLoaderKeys, AtomLoaderTypes } from "./types";
import { useTheme } from "styled-components";

type ISizes = {
  [key in AtomLoaderKeys]: {
    flex?: number;
    width: number;
    height: number;
  };
};
const Sizes: ISizes = {
  big: {
    height: 100,
    width: 100,
  },
  medium: {
    height: 50,
    width: 50,
  },
  small: {
    height: 30,
    width: 30,
  },
  button: {
    flex: 1,
    height: 30,
    width: 30,
  },
};

const AtomLoader = (props: AtomLoaderTypes) => {
  const { loading, astheme, style, astype, color } = props;
  if (loading) {
    return (
      <Lottie
        colorFilters={[
          {
            keypath: "icon",
            color: color ?? 'red',
          },
          {
            keypath: "icon 2",
            color: color ?? 'red',
          },
        ]}
        autoPlay
        loop
        {...props}
        style={Object.assign(
          {
            ...Sizes[astype ?? "medium"],
          },
          style
        )}
        source={SplashArtAnimation}
      />
    );
  }
  return null;
};

export default AtomLoader;
