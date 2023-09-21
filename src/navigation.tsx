import { NativeRouter, Route, Routes } from "react-router-native";
import Home from "./screens/Home";
import Player from "./screens/Player";


const Navigation = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song" element={<Player />} />
      </Routes>
    </NativeRouter>
  );
};

export default Navigation;
