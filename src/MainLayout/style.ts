import styled from "styled-components";

const MainLayoutSC = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  transition: 0.3s all;
  color: ${({ theme }) => theme.textMain};
  letter-spacing: 1px;
`;
const ScrollLeftBlogSC = styled.div`
  @media (max-width: 1200px) {
    display: none;
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
  MainLayoutSC,
  ScrollLeftBlogSC,
  MainLayoutContainerSC,
});
