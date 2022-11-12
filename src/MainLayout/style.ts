import styled from "styled-components";

const MainLayoutSC = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  transition: 0.3s all;
`;
const IconBulbSC = styled.div`
  position: absolute;
  right: 5%;
  top: 1%;
  fill: ${({ theme }) => theme.invertBackground};
  cursor: pointer;

  &:hover {
    background-size: 120%;
  }
`;

const MainLayoutContainerSC = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 100%;
    left: 0px;
  }
`;

export const useMainLayoutStyle = () => ({
  IconBulbSC,
  MainLayoutSC,
  MainLayoutContainerSC,
});
