import styled from "styled-components";

interface ISelectSCProps {
  isShow: boolean;
}
const SelectSC = styled.div``;
const SelectTitleSC = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 7px;
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 450px) {
    font-size: 16px;
  }
`;
const TriangleSC = styled.div<ISelectSCProps>`
  position: relative;
  top: ${({ isShow }) => (isShow ? "-7px" : "7px")};
  left: 0px;
  margin-right: 5px;
  border: 7px solid transparent;
  border-top: ${({ isShow }) => !isShow && "7px solid gray"};
  border-bottom: ${({ isShow }) => isShow && "7px solid gray"};
`;
const SelectContentSC = styled.div<ISelectSCProps>`
  max-height: ${({ isShow }) => (isShow ? "207px" : "0px")};
  opacity: ${({ isShow }) => (isShow ? "1" : "0")};

  overflow: hidden;
  transition: all 0.3s;
`;
export const useSelectStyle = () => ({
  SelectSC,
  TriangleSC,
  SelectTitleSC,
  SelectContentSC,
});
