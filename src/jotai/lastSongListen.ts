import { atom } from "jotai";
import { IITrack } from "~/apollo/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ListTrackAtom = atom(
  [] as IITrack[],
  async (get, set, arg: IITrack[]) => {
    set(ListTrackAtom, arg);
    await AsyncStorage.setItem("lastSongListen", JSON.stringify(arg));
  }
);
