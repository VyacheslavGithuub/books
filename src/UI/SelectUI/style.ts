import styled from "styled-components";

interface ISelectSCProps {
  isShow: boolean;
}
const SelectSC = styled.div``;
const SelectTitleSC = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 450px) {
    font-size: 16px;
  }
`;
const TriangleSC = styled.div<ISelectSCProps>`
  margin-left: 5px;
  border: 5px solid transparent;
  border-top: ${({ isShow }) => !isShow && "5px solid gray"};
  border-bottom: ${({ isShow }) => isShow && "5px solid gray"};
`;
const SelectContentSC = styled.div<ISelectSCProps>`
  max-height: ${({ isShow }) => (isShow ? "200px" : "0px")};
  overflow: hidden;
  transition: all 0.3s;
`;
export const useSelectStyle = () => ({
  SelectSC,
  TriangleSC,
  SelectTitleSC,
  SelectContentSC,
});
