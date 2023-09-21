import AtomText from "~/components/@atoms/AtomText";
import AtomView from "~/components/@atoms/AtomView";
import { ScrollView } from "react-native";
import { ListTrackAtom } from "~/jotai/lastSongListen";
import { useAtom, useAtomValue } from "jotai";
import { css } from "styled-components/native";
import AtomButton from "~/components/@atoms/AtomButton";
import { useNavigate } from "react-router-native";
import CardSong from "~/components/@molecules/CardSong";
import AtomImage from "~/components/@atoms/AtomImage";
import { TrackAtom } from "~/jotai/player";
const Profile = () => {
  const navigate = useNavigate();
  const listTrack = useAtomValue(ListTrackAtom);
  const [trackCurrent, setTrackCurrent] = useAtom(TrackAtom);
  return (
    <AtomView
      css={() => css`
        flex: 1;
      `}
    >
      <AtomView
        css={() => css`
          width: 100%;
          height: 300px;
          /* padding */
        `}
      >
        <AtomImage
          // style={{ borderRadius: 20 }}
          source={{
            uri: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          }}
        />
      </AtomView>
      <AtomView
        css={() => css`
          flex: 1;
          width: 100%;
        `}
      >
        <ScrollView
          style={{
            width: "100%",
            height: "100%",
            paddingRight: 20,
          }}
        >
          {listTrack.map((item, index) => {
            return (
              <AtomView
                css={() => css`
                  padding: 10px 20px;
                  width: 100%;
                  flex-direction: row;
                `}
                key={`song-${item?.id}`}
              >
                <AtomText
                  css={() => css`
                    color: #ffffff7b;
                    font-size: 16px;
                    padding-right: 10px;
                    min-width: 30px;
                  `}
                >
                  {index + 1}.
                </AtomText>
                <AtomButton
                  type="none"
                  css={() => css`
                    width: 100%;
                    padding: 0px;
                  `}
                  onPress={() => {
                    if (!item) return;
                    if (item?.id !== trackCurrent?.id) {
                      setTrackCurrent(item);
                    }
                    navigate("/song", {
                      state: {
                        track: item,
                      },
                    });
                  }}
                >
                  <CardSong
                    artist={
                      item?.artists?.map((item) => item?.name).join(", ") ?? ""
                    }
                    title={item?.name ?? ""}
                    image={item?.album?.photo ?? ""}
                    publishedAt={item?.album?.release_date ?? ""}
                    genders={[]}
                  />
                </AtomButton>
              </AtomView>
            );
          })}
        </ScrollView>
      </AtomView>
    </AtomView>
  );
};

export default Profile;
