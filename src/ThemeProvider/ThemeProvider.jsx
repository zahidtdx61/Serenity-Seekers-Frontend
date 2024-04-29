import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CustomThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("0");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if(localTheme !== null){
      setTheme(localTheme);
    }else{
      setTheme('0');
      localStorage.setItem("theme", '0');
    }
    const currTheme = localStorage.getItem("theme");
    if(currTheme === '0') document.querySelector("html").setAttribute("data-theme", "light");
    else document.querySelector("html").setAttribute("data-theme", "dracula");
  }, []);

  const themeData = {
    theme,
    setTheme,
  };
  
  return (
    <CustomThemeContext.Provider value={themeData}>
      {children}
    </CustomThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
