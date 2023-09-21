import React, { useState } from "react";
import { ScrollView } from "react-native";
import AtomView from "../AtomView";
import AtomButton from "../AtomButton";
import AtomText from "../AtomText";
import AtomSeparator from "../AtomSeparator";
import { css } from "styled-components/native";
import { AtomTabsProps } from "./types";

const AtomTabs = (props: AtomTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const { tabs, componentsProps } = props;

  return (
    <AtomView
      css={() => css`
        flex: 1;
      `}
    >
      <AtomView
        css={() => css`
          width: 100%;
          flex-direction: row;
          justify-content: flex-center;
          padding-bottom: 5px;
        `}
      >
        <ScrollView
          horizontal
          style={{
            // backgroundColor: 'red',

            paddingHorizontal: 10,
            paddingBottom: 10,
            // flex: 1,
            // flexDirection: 'row',
            // justifyContent: 'center',
            // justifyContent: 'center',
          }}
        >
          <AtomView
            css={() => css`
              flex-direction: row;
              justify-content: center;
              align-items: flex-start;
            `}
          >
            {tabs?.map((tab, index) => {
              const isActive = activeTab === index;
              const buttonProps = isActive
                ? componentsProps?.tabsProps?.buttonActiveProps
                : componentsProps?.tabsProps?.buttonDisabledProps;
              return (
                <AtomButton
                  type="button"
                  {...buttonProps}
                  key={tab.id ?? `tab-${index + 1}`}
                  css={(theme) => css`
                    min-height: 32px;
                    padding: 0 5px;
                    background-color: transparent;
                    ${buttonProps?.css?.(theme)}
                  `}
                  onPress={() => {
                    setActiveTab(index);
                    tab?.onClick?.();
                  }}
                >
                  {tab?.viewtitle ? (
                    tab?.viewtitle(tab, isActive)
                  ) : (
                    <AtomText
                      astype="button"
                      css={() => css`
                        color: #ffffff;
                      `}
                    >
                      {tab.title}
                    </AtomText>
                  )}
                  {
                    <AtomSeparator
                      css={() => css`
                        padding-top: 5px;
                      `}
                      borderBottomWidth="1px"
                      borderBottomColor={isActive ? "#ffffff" : "#152237"}
                    />
                  }
                </AtomButton>
              );
            })}
          </AtomView>
        </ScrollView>
      </AtomView>
      <AtomView
        css={() => css`
          flex: 1;
        `}
      >
        {tabs?.[activeTab]?.content}
      </AtomView>
    </AtomView>
  );
};
export default AtomTabs;
