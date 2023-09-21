import { useAtom } from "jotai/react";
import {
  DidJustFinishAtom,
  DurationAtom,
  IsPlayingAtom,
  PositionAtom,
  SoundAtom,
} from "~/jotai/player";

const usePlayer = () => {
  const [sound, setSound] = useAtom(SoundAtom);
  const [position, setPosition] = useAtom(PositionAtom);
  const [duration, setDuration] = useAtom(DurationAtom);
  const [isPlaying, setIsPlaying] = useAtom(IsPlayingAtom);
  const [didJustFinish, setDidJustFinish] = useAtom(DidJustFinishAtom);
  if (!sound)
    return {
      handlePlay: () => {},
      handleSliderChange: () => {},
      position,
      duration,
      isPlaying,
      sound,
    };
  const handlePlay = async () => {
    if (!sound) return;
    if (didJustFinish) {
      await sound.setPositionAsync(0);
    }
    if (isPlaying) {
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  const handleSliderChange = async (value: number) => {
    await sound.setPositionAsync(value);
    setPosition(value);
  };

  return {
    handlePlay,
    handleSliderChange,
    position,
    duration,
    isPlaying,
    sound,
  };
};

export default usePlayer;
