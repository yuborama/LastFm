import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSetAtom } from "jotai";
import { ListTrackAtom } from "~/jotai/lastSongListen";
import { useEffect } from "react";
const useLoadStorage = async () => {
  const setListTrack = useSetAtom(ListTrackAtom);

  useEffect(() => {
    const loadStorage = async () => {
      try {
        const value = await AsyncStorage.getItem("lastSongListen");
        if (value !== null) {
          setListTrack(JSON.parse(value));
        }
      } catch (e) {
        // error reading value
      }
    };
    loadStorage();
  }, [setListTrack]);
};

export default useLoadStorage;