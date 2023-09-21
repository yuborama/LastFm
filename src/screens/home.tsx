import { Pressable, StyleSheet, Text, View } from "react-native";
// import SkeletonContent from "react-native-skeleton-content";
import { css } from "styled-components/native";
import AtomImage from "~/components/@atoms/AtomImage";
import AtomText from "~/components/@atoms/AtomText";
import AtomView from "~/components/@atoms/AtomView";

const fechtData = async () => {
  const response = await fetch(
    "http://www.last.fm/api/auth/?api_key=6dc1c2408d86bc3443390412c502ff52"
  );
  const data = response;
  console.log(data);
};

function Home() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch(
  //       "http://www.last.fm/api/auth/?api_key=6dc1c2408d86bc3443390412c502ff52"
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   };
  //   getData();
  // }, []);

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
          `}
        >
          Playing from
        </AtomText>
        <AtomText
          css={() => css`
            color: #ffffff;
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
          padding-top: 80px;
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
const Spacer = ({ height = 16 }) => <View style={{ height }} />;
