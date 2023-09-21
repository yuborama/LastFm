import { Audio } from "expo-av";
import { atom } from "jotai";
import { IITrack } from "~/apollo/types";
import { ListTrackAtom } from "~/jotai/lastSongListen";

export const SoundAtom = atom<null | Audio.Sound>(null);
export const PositionAtom = atom(0);
export const DurationAtom = atom(0);
export const IsPlayingAtom = atom(false);
export const DidJustFinishAtom = atom(false);

export const TrackAtom = atom(
  null as unknown as IITrack,
  async (get, set, arg: IITrack) => {
    set(TrackAtom, arg);
    // set sound
    const soundget = get(SoundAtom);
    if (soundget) {
      await soundget.stopAsync();
      await soundget.unloadAsync();
    }
    set(PositionAtom, 0);
    set(DurationAtom, 0);
    set(IsPlayingAtom, false);
    set(DidJustFinishAtom, false);
    const { sound } = await Audio.Sound.createAsync(
      {
        uri: arg.preview_url ?? "",
      },
      {},
      (status) => {
        if (!status.isLoaded) return;
        set(DidJustFinishAtom, status.didJustFinish);
        set(DurationAtom, Number(status.durationMillis));
        set(PositionAtom, Number(status.positionMillis));
        set(IsPlayingAtom, status.isPlaying);
      }
    );
    sound.playAsync();
    set(SoundAtom, sound);

    // add to list track
    const array = get(ListTrackAtom);
    const arrayFilter = array.filter((item) => item.id !== arg.id);
    const newArray = [arg, ...arrayFilter];
    set(ListTrackAtom, newArray);
  }
);
export const SongAtom = atom<null | string>(null);
