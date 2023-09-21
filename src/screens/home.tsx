import AtomTabs from "~/components/@atoms/AtomTabs";
import Songs from "./Songs";
import Profile from "./Profile";
import { css } from "styled-components";
import AtomView from "~/components/@atoms/AtomView";

const tabs = [
  {
    id: `songsTab`,
    title: `Songs`,
    content: <Songs />,
  },
  {
    id: `ProfileTab`,
    title: `My Profile`,
    content: <Profile />,
  },
];

const HomeTabs = () => {
  return (
    <AtomView
      css={() => css`
        flex: 1;
        padding-top: 20px;
      `}
    >
      <AtomTabs
        tabs={tabs}
        componentsProps={{
          tabsProps: {
            buttonActiveProps: {
              css: () => css`
                color: #ffffff;
              `,
            },
          },
        }}
      />
    </AtomView>
  );
};

export default HomeTabs;
