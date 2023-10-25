import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { createContext, useState } from "react";
export const ThemeContext = createContext(null);
import ReactSwitch from "react-switch";


const Root = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr == "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          backgroundColor: theme === "light" ? "#aaaaaa" : "#462556",
          color: theme === "light" ? "black" : "black",
        }}
      >
        <div className="sm:mx-3 md:mx-0 lg:mx-10 lg:mt-6">
          <Header></Header>
          <div className="flex justify-end">
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}></ReactSwitch>
          </div>          
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Root;
