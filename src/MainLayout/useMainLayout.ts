import { useState, useEffect } from "react";

export const useApp = () => {
  const [isTheme, setTheme] = useState<string>("light");
  console.log(isTheme);

  // Сетаем значение в useState и localStorage
  const hendleChangeTheme = () => {
    if (isTheme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  // сетаем тему при первой отрисовки компонента
  useEffect(() => {
    let getLocalStoreg = localStorage.getItem("theme");
    if (getLocalStoreg) {
      setTheme(getLocalStoreg);
    }
  }, []);

  return {
    isTheme,
    hendleChangeTheme,
  };
};
