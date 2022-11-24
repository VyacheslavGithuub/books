import styled from "styled-components";

const ST_Container_SC = styled.div<{ isShow: boolean }>`
  opacity: ${({ isShow }) => (isShow ? "1" : "0")};
  transition: all 0.3s ease;
  cursor: pointer;

  position: sticky;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 35px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 17%,
    rgba(160, 160, 160, 1) 100%
  );

  &:hover {
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 17%,
      rgba(102, 102, 102, 1) 100%
    );
    div {
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    height: 70px;
    width: 70px;
    border-radius: 100%;
    bottom: 30px;
    left: 13px;
  }
`;
const ST_RowTop_SC = styled.div`
  transition: all 0.3s;
  opacity: 0.6;

  border: solid;
  border-width: 0 5px 5px 0;
  padding: 5px;

  display: inline-block;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);

  position: relative;
  top: calc(50% - 5px);
  left: calc(50% - 8px);

  @media (max-width: 1200px) {
    border-width: 0 7px 7px 0;
    padding: 7px;

    top: calc(50% - 7px);
    left: calc(50% - 10px);
  }
`;

export const useScrollTopStyle = () => ({
  ST_RowTop_SC,
  ST_Container_SC,
});
