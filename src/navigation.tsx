import { NativeRouter, Route, Routes } from "react-router-native";
import Home from "./screens/home";
import Songs from "./screens/Songs";


const Navigation = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Songs />} />
        <Route path="/song" element={<Home />} />
      </Routes>
    </NativeRouter>
  );
};

export default Navigation;
