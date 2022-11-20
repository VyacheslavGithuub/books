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
  transition: all 0.3s;
  height: 0px;
  display: none;

  ${(props) =>
    props.isShow &&
    `
      display: block;
      height: 100%;
    `}
`;
export const useSelectStyle = () => ({
  SelectSC,
  TriangleSC,
  SelectTitleSC,
  SelectContentSC,
});
