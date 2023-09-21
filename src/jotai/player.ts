import { Audio } from "expo-av";
import { atom } from "jotai";
import { IITrack } from "~/apollo/types";

export const SoundAtom = atom<null | Audio.Sound>(null);
export const PositionAtom = atom(0);
export const DurationAtom = atom(0);
export const IsPlayingAtom = atom(false);
export const DidJustFinishAtom = atom(false);


export const TrackAtom = atom<null | IITrack>(null);
export const SongAtom = atom<null | string>(null);
