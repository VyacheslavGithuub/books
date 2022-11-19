import styled from "styled-components";
//@ts-ignore
import img from "../../../Icon/IconHome/IconHome.png";
//@ts-ignore
import IconChildren from "../../../Icon/IconHome/IconChildren.png";

const SearchSectionWrapSC = styled.div`
  display: flex;
  background-color: #db9c74;
  height: 550px;
  width: 100%;
  box-sizing: border-box;
  border: 2px ridge #6c3d1c;
  box-shadow: rgba(250, 250, 250, 0.4) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  @media (max-width: 960px) {
    justify-content: center;
    height: 450px;
  }
`;

const BooksSectionSC = styled.section`
  display: flex;
  justify-content: end;
  width: 50%;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0 250px 250px 0;
  height: 100%;
  opacity: 0.9;
  box-shadow: rgba(0, 0, 0) 0px 30px 60px -12px inset,
    rgba(0, 0, 0) 0px 18px 36px -18px inset;

  @media (max-width: 960px) {
    display: none;
  }
`;
const SearchSectionSC = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

const SearchTitleSC = styled.h2`
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 2px;
  color: #fcf3eb;
`;
const SearchChildrenSC = styled.div`
  background-image: url(${IconChildren});
  background-size: contain;
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
`;

export const useSearchSectionStyle = () => ({
  BooksSectionSC,
  SearchSectionWrapSC,
  SearchTitleSC,
  SearchChildrenSC,
  SearchSectionSC,
});
