import React, { useState, useEffect } from "react";

export const useApp = () => {
  const [isTheme, setTheme] = useState<boolean>(false);
  const hendleChangeTheme = () => setTheme(!isTheme);

  return {
    isTheme,
    hendleChangeTheme,
  };
};
