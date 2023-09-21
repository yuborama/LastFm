import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useLocation, useNavigate } from "react-router-native";
import { css } from "styled-components/native";
import { IITrack } from "~/apollo/types";
import AtomButton from "~/components/@atoms/AtomButton";
import AtomImage from "~/components/@atoms/AtomImage";
import AtomText from "~/components/@atoms/AtomText";
import AtomView from "~/components/@atoms/AtomView";
import PlayerControls from "~/components/@organims/Player";

const songUrl =
  "https://p.scdn.co/mp3-preview/0790eb03d0d2b6aac7c9c762bc2bf1f3649dd7ca?cid=15e19cc7c63946a1a28fa4ccd923a9f7";

const Player = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.track as IITrack;
  // console.log("mi track", data);
  return (
    <AtomView style={styles.container}>
      <AtomView
        css={() => css`
          padding-bottom: 60px;
        `}
      >
        <AtomText
          css={() => css`
            color: #536275;
            font-size: 16px;
          `}
        >
          Playing from
        </AtomText>
        <AtomView>
          <AtomText
            css={() => css`
              color: #ffffff;
              font-size: 21px;
              font-weight: bold;
            `}
          >
            poll, Top Tracks this week, All Genres
          </AtomText>
          <AtomButton onPress={() => navigate(-1)}>
            <Svg width="24" height="24" viewBox="0 0 64 64" fill="none">
              <Path
                d="M10.8796 23.76L28.2662 41.1466C30.3196 43.1999 33.6796 43.1999 35.7329 41.1466L53.1196 23.76"
                stroke="#f9f9f9"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </AtomButton>
        </AtomView>
      </AtomView>
      <AtomView
        css={() => css`
          background-color: #ffffff;
          height: 80%;
          bottom: 0;
          border-top-left-radius: 50px;
          border-top-right-radius: 50px;
          padding: 40px;
          display: flex;
          align-items: center;
        `}
      >
        <AtomView
          css={() => css`
            width: 100%;
            max-height: 320px;
          `}
        >
          <AtomImage
            style={{
              borderRadius: 20,
            }}
            source={{
              uri: data?.album?.photo,
            }}
          />
        </AtomView>
        <AtomView
          css={() => css`
            padding-top: 30px;
            gap: 2px;
          `}
        >
          <AtomText
            css={() => css`
              font-size: 22px;
              color: #4a4a4a;
              font-weight: bold;
            `}
          >
            {data?.name}
          </AtomText>
          <AtomText
            css={() => css`
              color: #000000;
              opacity: 0.5;
              font-size: 16px;
            `}
          >
            {data?.artists?.map((item) => item?.name).join(", ")}
          </AtomText>
        </AtomView>
        <PlayerControls />
      </AtomView>
    </AtomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#162238",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default Player;
