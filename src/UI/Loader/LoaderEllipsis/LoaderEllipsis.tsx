import React from "react";
import { useLoaderEllipsisStyle } from "./style";

const LoaderEllipsis = () => {
  const { LoaderEllipsisSC } = useLoaderEllipsisStyle();

  return (
    <LoaderEllipsisSC>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoaderEllipsisSC>
  );
};

export default LoaderEllipsis;
