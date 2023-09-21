import { useNavigate } from "react-router-native";
import { css } from "styled-components/native";
import AtomButton from "~/components/@atoms/AtomButton";
import AtomView from "~/components/@atoms/AtomView";
import CardSong from "~/components/@organims/CardSong";

const songsArray = [
  {
    title: "No Problem (feat. lil Wayne & 2 Chainz)",
    publishedAt: "2016-05-26",
    artist: "Chance The Rapper",
    genders: ["Hip Hop", "Rap"],
    image: "https://i1.sndcdn.com/artworks-000183627359-9iq3xa-t500x500.jpg",
  },

  {
    title: "lonely ft. lil Skies",
    publishedAt: "2019-02-14",
    artist: "Yung Bans",
    genders: ["Hip Hop", "Rap"],
    image: "https://i1.sndcdn.com/artworks-000276381566-3ghel8-t500x500.jpg",
  },
  {
    title: "Humility (feat. George Benson)",
    publishedAt: "2018-05-31",
    artist: "Gorillaz",
    genders: ["Alternative/Indie", "Pop"],
    image:
      "https://m.media-amazon.com/images/I/616H7Ca1ctL._UXNaN_FMjpg_QL85_.jpg",
  },
  {
    title: "Sicko Mode",
    publishedAt: "2018-08-21",
    artist: "Travis Scott",
    genders: ["Hip Hop", "Rap"],
    image:
      "https://static.wixstatic.com/media/63ccb6_df079d1250414480a9086c8965053cea~mv2.png/v1/fit/w_598%2Ch_350%2Cal_c%2Cq_80,enc_auto/file.jpg",
  },
  {
    title: "Blinding Lights",
    publishedAt: "2019-11-29",
    artist: "The Weeknd",
    genders: ["R&B", "Pop"],
    image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
  },
  {
    title: "Shape of You",
    publishedAt: "2017-01-06",
    artist: "Ed Sheeran",
    genders: ["Pop"],
    image:
      "https://m.media-amazon.com/images/M/MV5BNWU3N2ZkODAtMTQ0MS00ODA3LWE4MWQtOWJiNjllZWU1NzdhXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg",
  },
  {
    title: "Don't Start Now",
    publishedAt: "2019-10-31",
    artist: "Dua Lipa",
    genders: ["Pop", "Dance"],
    image:
      "https://indigomusic.com/wp-content/uploads/2020/11/Cardio-Workout-Playlist-YouTube-Thumbnail-4.jpg",
  },
];

const Songs = () => {
  const navigate = useNavigate();

  return (
    <AtomView
      css={() => css`
        flex: 1;
        background-color: #162238;
        gap: 7px;
      `}
    >
      {songsArray.map((item, _index) => (
        <AtomButton
          type="none"
          css={() => css`
            width: 100%;
            padding: 0px;
          `}
          key={`song-${_index}`}
          onPress={() => {
            navigate("/song");
          }}
        >
          <CardSong {...item} />
        </AtomButton>
      ))}
    </AtomView>
  );
};

export default Songs;
