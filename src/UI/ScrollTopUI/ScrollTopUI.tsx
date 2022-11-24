import React, { useState, useEffect } from "react";
import { useScrollTopStyle } from "./style";

const ScrollTopUI = () => {
  const { ST_RowTop_SC, ST_Container_SC } = useScrollTopStyle();
  const [isShow, setShow] = useState<boolean>(false);

  const scrollHandler = (e: any) => {
    if (e.target.documentElement.scrollTop > 800) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <ST_Container_SC onClick={() => window.scrollTo(0, 0)} isShow={isShow}>
      <ST_RowTop_SC />
    </ST_Container_SC>
  );
};

export default ScrollTopUI;
