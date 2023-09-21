import Slider from "@react-native-community/slider";
import { css } from "styled-components";
import { IITrack } from "~/apollo/types";
import AtomText from "~/components/@atoms/AtomText";
import AtomView from "~/components/@atoms/AtomView";
import usePlayer from "~/hooks/player";
import Svg, { Path } from "react-native-svg";
import mills from "~/utils/mills";
import AtomButton from "~/components/@atoms/AtomButton";

const PlayerControls = () => {
  const { duration, handlePlay, handleSliderChange, position, isPlaying } =
    usePlayer();
  return (
    <>
      <AtomView
        css={() => css`
          display: flex;
          flex-direction: row;
          justify-content: center;
        `}
      >
        <AtomText>0:{mills(position)}</AtomText>
        <Slider
          style={{ width: 300, height: 50 }}
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
      <AtomView
        css={() => css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <Svg width="24" height="24" viewBox="0 0 64 64" fill="none">
          <Path
            d="M8 47.9465L14.8 47.9731C17.2266 47.9731 19.4933 46.7731 20.8267 44.7731L37.8667 19.2266C39.2 17.2266 41.4667 15.9999 43.8933 16.0265L56.0267 16.0799"
            stroke="#292D32"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M50.6665 53.2801L55.9998 47.9468"
            stroke="#292D32"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M23.7067 22.9864L20.8267 18.9864C19.4667 17.0931 17.28 15.9731 14.96 15.9997L8 16.0264"
            stroke="#292D32"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M34.5864 41.0132L37.8398 45.1998C39.1998 46.9598 41.3331 47.9999 43.5731 47.9999L56.0264 47.9465"
            stroke="#292D32"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M55.9998 16.0533L50.6665 10.72"
            stroke="#292D32"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>

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
          <AtomButton onPress={async () => await handlePlay()}>
            <Svg width="64" height="64" viewBox="0 0 64 64" fill="none">
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
          </AtomButton>
        ) : (
          <AtomButton onPress={async () => await handlePlay()}>
            <Svg width="64" height="64" viewBox="0 0 64 64" fill="none">
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
          </AtomButton>
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

        <Svg width="24" height="24" viewBox="0 0 64 64" fill="none">
          <Path
            d="M37.3333 8L43.84 14.2401L22.64 14.1867C13.12 14.1867 5.30664 22.0001 5.30664 31.5733C5.30664 36.3467 7.25331 40.6933 10.4 43.84"
            stroke="#292D32"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M26.6669 56.0003L20.1602 49.76L41.3603 49.8136C50.8803 49.8136 58.6936 42 58.6936 32.4267C58.6936 27.6533 56.7469 23.3068 53.6003 20.1602"
            stroke="#292D32"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M32.6665 39.1199V24.8801L28.6665 29.3335"
            stroke="#292D32"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </AtomView>
      <AtomView
        css={() => css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <Svg width="24" height="24" viewBox="0 0 64 64" fill="none">
          <Path
            d="M58.6668 34.6666V45.3333C58.6668 54.6666 53.3335 58.6666 45.3335 58.6666H18.6668C10.6668 58.6666 5.3335 54.6666 5.3335 45.3333V34.6666C5.3335 27.5999 8.40016 23.6 13.3335 22.08C14.9335 21.5733 16.7202 21.3333 18.6668 21.3333H45.3335C47.2802 21.3333 49.0668 21.5733 50.6668 22.08C55.6002 23.6 58.6668 27.5999 58.6668 34.6666Z"
            stroke="#292D32"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M50.6668 18.6666V22.08C49.0668 21.5733 47.2802 21.3333 45.3335 21.3333H18.6668C16.7202 21.3333 14.9335 21.5733 13.3335 22.08V18.6666C13.3335 15.7333 15.7335 13.3333 18.6668 13.3333H45.3335C48.2668 13.3333 50.6668 15.7333 50.6668 18.6666Z"
            stroke="#292D32"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M42.6668 9.35995V13.3333H21.3335V9.35995C21.3335 7.14661 23.1469 5.33325 25.3602 5.33325H38.6402C40.8535 5.33325 42.6668 7.14661 42.6668 9.35995Z"
            stroke="#292D32"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M24.1865 51.8669C26.1306 51.8669 27.7065 50.2909 27.7065 48.3469C27.7065 46.4029 26.1306 44.8269 24.1865 44.8269C22.2425 44.8269 20.6665 46.4029 20.6665 48.3469C20.6665 50.2909 22.2425 51.8669 24.1865 51.8669Z"
            stroke="#292D32"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M40.6662 46.0002V32.2135C40.6662 29.2802 38.8262 28.8535 36.9596 29.3868L29.8929 31.3068C28.6129 31.6535 27.7329 32.6668 27.7329 34.1335V36.5868V38.2402V48.3468"
            stroke="#292D32"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M37.1465 49.5205C39.0905 49.5205 40.6665 47.9445 40.6665 46.0005C40.6665 44.0565 39.0905 42.4805 37.1465 42.4805C35.2025 42.4805 33.6265 44.0565 33.6265 46.0005C33.6265 47.9445 35.2025 49.5205 37.1465 49.5205Z"
            stroke="#292D32"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M27.7329 38.2673L40.6662 34.7476"
            stroke="#292D32"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>

        <Svg width="24" height="24" viewBox="0 0 64 64" fill="none">
          <Path
            d="M5.3335 8H58.6668"
            stroke="#292D32"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M5.3335 24H29.3335"
            stroke="#292D32"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M5.3335 40H21.3335"
            stroke="#292D32"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M5.3335 56H16.0002"
            stroke="#292D32"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M31.5735 58.6665C34.7842 58.6665 37.3868 56.0638 37.3868 52.8531C37.3868 49.6425 34.7842 47.0398 31.5735 47.0398C28.3631 47.0398 25.7603 49.6425 25.7603 52.8531C25.7603 56.0638 28.3631 58.6665 31.5735 58.6665Z"
            stroke="#292D32"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M58.6667 48.9863V26.2931C58.6667 21.4664 55.6267 20.7997 52.56 21.6264L40.9601 24.7997C38.8534 25.3864 37.3867 27.0397 37.3867 29.4663V33.5199V36.2399V52.8533"
            stroke="#292D32"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M52.8534 54.7998C56.064 54.7998 58.6667 52.1971 58.6667 48.9864C58.6667 45.776 56.064 43.1731 52.8534 43.1731C49.6427 43.1731 47.04 45.776 47.04 48.9864C47.04 52.1971 49.6427 54.7998 52.8534 54.7998Z"
            stroke="#292D32"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M37.3867 36.2665L58.6667 30.4531"
            stroke="#292D32"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </AtomView>
    </>
  );
};

export default PlayerControls;
