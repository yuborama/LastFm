import React from "react";
import { FlatList } from "react-native";
import { css } from "styled-components/native";
import AtomLoader from "../AtomLoader";
import AtomView from "../AtomView";
import { AtomScrollInfiteTypes } from "./types";

const AtomScrollInfite = <T extends object>(
  props: AtomScrollInfiteTypes<T>
) => {
  const { data, component, dispatch, onScroll, pagination, loading } = props;
  return (
    <AtomView
      css={() => css`
        flex: 1;
        background-color: #162238;
      `}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => component(item as T)}
        onEndReachedThreshold={0.8}
        onEndReached={() => {
          if (pagination?.hasnextpage && dispatch && loading === false) {
            dispatch?.({
              ...pagination,
              page: pagination?.hasnextpage
                ? (pagination?.page ?? 0) + 1
                : pagination?.page,
            });
          }
          onScroll?.();
        }}
        ListFooterComponent={
          <>
            {loading ? (
              <AtomView
                css={() => css`
                  align-items: center;
                `}
              >
                <AtomLoader loading={loading} />
              </AtomView>
            ) : (
              <AtomView
                css={() => css`
                  height: 20px;
                `}
              />
            )}
          </>
        }
        {...props}
        style={[{ width: "100%", paddingBottom: 100 }, props?.style]}
      />
    </AtomView>
  );
};
export default AtomScrollInfite;
