import React, { useState } from "react";
import { useSelectStyle } from "./style";

interface ISelectUIProps {
  title: string;
  children: React.ReactNode;
}
const SelectUI = ({ title, children }: ISelectUIProps) => {
  const { SelectSC, TriangleSC, SelectTitleSC, SelectContentSC } =
    useSelectStyle();
  const [isShow, setShow] = useState<boolean>(false);
  const handleChangeIsShow = () => setShow(!isShow);

  return (
    <SelectSC>
      <SelectTitleSC onClick={handleChangeIsShow}>
        {title} <TriangleSC isShow={isShow} />
      </SelectTitleSC>
      {/* <hr /> */}
      <SelectContentSC isShow={isShow}>{children}</SelectContentSC>
    </SelectSC>
  );
};

export default SelectUI;
