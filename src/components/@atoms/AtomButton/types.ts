import { PressableProps, TouchableOpacityProps } from "react-native";

import { CSS } from "~/types";
import { AtomTextTypes } from "../AtomText/types";
import { AtomViewTypes } from "../AtomView/types";

export interface AtomButtonTypes extends TouchableOpacityProps {
  loading?: boolean | "true" | "false";
  type?: "button" | "text" | "none";
  css?: CSS;
  textProps?: AtomTextTypes;
  viewProps?: AtomViewTypes;
}
