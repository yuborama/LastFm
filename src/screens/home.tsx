import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { css } from "styled-components/native";
import AtomImage from "~/components/@atoms/AtomImage";
import AtomText from "~/components/@atoms/AtomText";
import AtomView from "~/components/@atoms/AtomView";
import mills from "~/utils/mills";

const songUrl =
  "https://p.scdn.co/mp3-preview/0790eb03d0d2b6aac7c9c762bc2bf1f3649dd7ca?cid=15e19cc7c63946a1a28fa4ccd923a9f7";

function Home() {
  const [sound, setSound] = useState(null as unknown as Audio.Sound);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [didJustFinish, setDidJustFinish] = useState(false);

  useEffect(() => {
    async function playSound() {
      const { sound } = await Audio.Sound.createAsync(
        {
          uri: songUrl,
        },
        {},
        (status) => {
          if (!status.isLoaded) return;
          setDidJustFinish(status.didJustFinish);
          setDuration(Number(status.durationMillis));
          setPosition(Number(status.positionMillis));
          setIsPlaying(status.isPlaying);
        }
      );
      setSound(sound);
    }
    playSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const handlePlay = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        if (didJustFinish) {
          await sound.setPositionAsync(0);
        } else {
          await sound.playAsync();
        }
      }
    }
  };

  const handleSliderChange = async (value: number) => {
    if (sound) {
      await sound.setPositionAsync(value);
      setPosition(value);
    }
  };

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
        <AtomText
          css={() => css`
            color: #ffffff;
            font-size: 21px;
            font-weight: bold;
          `}
        >
          poll, Top Tracks this week, All Genres
        </AtomText>
      </AtomView>
      <AtomView
        css={() => css`
          background-color: #ffffff;
          height: 80%;
          bottom: 0;
          border-top-left-radius: 50px;
          border-top-right-radius: 50px;
          padding: 80px;
          display: flex;
          align-items: center;
        `}
      >
        <AtomView
          css={() => css`
            width: 250px;
            height: 250px;
          `}
        >
          <AtomImage
            style={{
              borderRadius: 20,
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
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
              font-size: 20px;
              color: #4a4a4a;
              font-weight: bold;
            `}
          >
            Bag (feat. Yung Bans)
          </AtomText>
          <AtomText
            css={() => css`
              color: #9ba0a4;
            `}
          >
            Chance The Rapper
          </AtomText>
          <AtomView
            css={() => css`
              display: flex;
              flex-direction: row;
              justify-content: center;
            `}
          >
            <AtomText>0:{mills(position)}</AtomText>
            <Slider
              style={{ width: 260, height: 50 }}
              minimumValue={0}
              value={position}
              onSlidingComplete={handleSliderChange}
              maximumValue={duration}
              thumbTintColor="#292D32"
              minimumTrackTintColor="#292D32"
              maximumTrackTintColor="#000000"
            />
            <AtomText>0:{mills(duration)}</AtomText>
          </AtomView>
        </AtomView>
        <AtomView>
          <AtomView
            css={() => css`
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
            `}
          >
            <Svg width="32" height="32" viewBox="0 0 64 64" fill="none">
              <Path
                d="M53.9733 19.2534V44.7735C53.9733 50.0002 48.2933 53.2799 43.76 50.6666L32.6933 44.2933L21.6266 37.8933C17.0932 35.2799 17.0932 28.7466 21.6266 26.1334L32.6933 19.7334L43.76 13.3601C48.2933 10.7467 53.9733 14.0001 53.9733 19.2534Z"
                stroke="#292D32"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M10.0269 48.4803V15.5203"
                stroke="#292D32"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>

            {isPlaying ? (
              <Svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                onPress={handlePlay}
                disabled={!sound}
              >
                <Path
                  d="M31.9202 58.6666C46.6476 58.6666 58.5868 46.7274 58.5868 31.9999C58.5868 17.2723 46.6476 5.33325 31.9202 5.33325C17.1925 5.33325 5.25342 17.2723 5.25342 31.9999C5.25342 46.7274 17.1925 58.6666 31.9202 58.6666Z"
                  stroke="#292D32"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M28.5868 38.7467V25.2535C28.5868 23.9735 28.0535 23.4668 26.6935 23.4668H23.2268C21.8668 23.4668 21.3335 23.9735 21.3335 25.2535V38.7467C21.3335 40.0267 21.8668 40.5333 23.2268 40.5333H26.6668C28.0535 40.5333 28.5868 40.0267 28.5868 38.7467Z"
                  stroke="#292D32"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M42.6666 38.7467V25.2535C42.6666 23.9735 42.1333 23.4668 40.7733 23.4668H37.3333C35.9733 23.4668 35.4399 23.9735 35.4399 25.2535V38.7467C35.4399 40.0267 35.9733 40.5333 37.3333 40.5333H40.7733C42.1333 40.5333 42.6666 40.0267 42.6666 38.7467Z"
                  stroke="#292D32"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            ) : (
              <Svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                onPress={handlePlay}
                disabled={!sound}
              >
                <Path
                  d="M31.9202 58.6666C46.6476 58.6666 58.5868 46.7274 58.5868 31.9999C58.5868 17.2723 46.6476 5.33325 31.9202 5.33325C17.1925 5.33325 5.25342 17.2723 5.25342 31.9999C5.25342 46.7274 17.1925 58.6666 31.9202 58.6666Z"
                  stroke="#292D32"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M23.3066 32.6131V28.1597C23.3066 22.613 27.2267 20.3463 32.0267 23.1197L35.8933 25.3597L39.76 27.5997C44.56 30.3731 44.56 34.9064 39.76 37.6797L35.8933 39.9197L32.0267 42.1597C27.2267 44.9331 23.3066 42.6664 23.3066 37.1197V32.6131Z"
                  stroke="#292D32"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            )}
            <Svg width="32" height="32" viewBox="0 0 64 64" fill="none">
              <Path
                d="M10.0267 44.7466V19.2265C10.0267 13.9998 15.7067 10.7201 20.24 13.3334L31.3067 19.7067L42.3734 26.1067C46.9068 28.7201 46.9068 35.2534 42.3734 37.8666L31.3067 44.2666L20.24 50.6399C15.7067 53.2533 10.0267 49.9999 10.0267 44.7466Z"
                stroke="#292D32"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M53.9731 15.5197V48.4797"
                stroke="#292D32"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </AtomView>
        </AtomView>
      </AtomView>
    </AtomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#162238",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default Home;
