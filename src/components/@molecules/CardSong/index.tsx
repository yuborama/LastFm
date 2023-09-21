import { css } from "styled-components/native";
import AtomImage from "~/components/@atoms/AtomImage";
import AtomText from "~/components/@atoms/AtomText";
import AtomView from "~/components/@atoms/AtomView";
import diffDays from "~/utils/diffDays";

type ICardSongPros = {
  title: string;
  publishedAt: string;
  artist: string;
  genders: string[];
  image?: string;
};

const CardSong = (props: ICardSongPros) => {
  const { title, artist, genders, image, publishedAt } = props;
  return (
    <AtomView
      css={() => css`
        flex-direction: row;
        background-color: #162238;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
      `}
    >
      <AtomView
        css={() => css`
          width: 60px;
          height: 60px;
        `}
      >
        <AtomImage
          source={{ uri: image }}
          style={{
            borderRadius: 10,
          }}
        />
      </AtomView>
      <AtomView
        css={() => css`
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-left: 10px;
        `}
      >
        <AtomView
          css={() => css`
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
          `}
        >
          <AtomText
            css={() => css`
              color: #7c8da4;
              font-size: 10px;
              font-weight: bold;
            `}
          >
            {publishedAt}
          </AtomText>
          {/* <AtomText
            css={() => css`
              color: #536275;
              font-size: 12px;
            `}
          >
            {genders.map((item) => `# ${item} `).join(" ")}
          </AtomText> */}
        </AtomView>
        <AtomText
          css={() => css`
            font-size: 16px;
            font-weight: bold;
            color: #c3cbd9;
          `}
          numberOfLines={1}
        >
          {title}
        </AtomText>
        <AtomText
          css={() => css`
            color: #7c8da4;
          `}
        >
          {artist}
        </AtomText>
      </AtomView>
    </AtomView>
  );
};

export default CardSong;
