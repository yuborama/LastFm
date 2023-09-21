import { AtomButtonTypes } from "../AtomButton/types";
import { AtomViewTypes } from "../AtomView/types";

export type tabType = {
  id?: string;
  title: string;
  viewtitle?: (e: tabType, state: boolean) => React.ReactNode;
  content: React.ReactNode;
  onClick?: () => void;
};

export interface AtomTabsProps {
  tabs?: tabType[];
  componentsProps?: {
    containerProps?: AtomViewTypes;
    tabsProps?: {
      buttonProps?: AtomButtonTypes;
      buttonActiveProps?: AtomButtonTypes;
      buttonDisabledProps?: AtomButtonTypes;
    };
    contentProps?: {
      wrapperProps?: AtomViewTypes;
    };
  };
}
