import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { useAtom } from "jotai/react";
import {
  DidJustFinishAtom,
  DurationAtom,
  IsPlayingAtom,
  PositionAtom,
  SongAtom,
  SoundAtom,
  TrackAtom,
} from "~/jotai/player";
import { IITrack } from "~/apollo/types";
const usePlayer = () => {
  const [sound, setSound] = useAtom(SoundAtom);
  const [position, setPosition] = useAtom(PositionAtom);
  const [duration, setDuration] = useAtom(DurationAtom);
  const [isPlaying, setIsPlaying] = useAtom(IsPlayingAtom);
  const [didJustFinish, setDidJustFinish] = useAtom(DidJustFinishAtom);
  const [trackCurrent, setTrackCurrent] = useAtom(TrackAtom);

  const handlePlay = async (track: IITrack) => {
    if (track.id !== trackCurrent?.id) {
      setTrackCurrent(track);
    }
    if (!sound) return;
    if (isPlaying) {
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      if (didJustFinish) {
        await sound.setPositionAsync(0);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
    }
  };

  const handleSliderChange = async (value: number) => {
    if (sound) {
      await sound.setPositionAsync(value);
      setPosition(value);
    }
  };
  async function playSound(songUrl: string) {
    const { sound } = await Audio.Sound.createAsync(
      {
        uri: songUrl,
      },
      {},
      (status) => {
        // console.log("playSound status", status);
        if (!status.isLoaded) return;
        setDidJustFinish(status.didJustFinish);
        setDuration(Number(status.durationMillis));
        setPosition(Number(status.positionMillis));
        setIsPlaying(status.isPlaying);
      }
    );
    setSound(sound);
  }
  useEffect(() => {
    if (trackCurrent?.preview_url === undefined) return;
    playSound(trackCurrent?.preview_url);

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [trackCurrent]);
  useEffect(() => {
    console.log("useEffect isPlaying", isPlaying);
  }, [isPlaying]);

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
