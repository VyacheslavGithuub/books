import React, { useState, useEffect } from "react";
import { useSelectStyle } from "./style";

interface ISelectUIProps {
  title: string;
  children: React.ReactNode;
}
const SelectUI = ({ title, children }: ISelectUIProps) => {
  const { SelectSC, TriangleSC, SelectTitleSC, SelectContentSC } =
    useSelectStyle();

  const [isShow, setShow] = useState<boolean>(false);

  const handleChangeIsShow = () => {
    setShow(!isShow);
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 300);
  };

  return (
    <SelectSC>
      <SelectTitleSC onClick={handleChangeIsShow}>
        <TriangleSC isShow={isShow} /> {title}
      </SelectTitleSC>

      <SelectContentSC isShow={isShow}>{children}</SelectContentSC>
    </SelectSC>
  );
};

export default React.memo(SelectUI);
