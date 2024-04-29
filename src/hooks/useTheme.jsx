import { useContext } from "react";
import { CustomThemeContext } from "../ThemeProvider/ThemeProvider";

const useCustomTheme = () => {
  const all = useContext(CustomThemeContext);
  return all;
};

export default useCustomTheme;
