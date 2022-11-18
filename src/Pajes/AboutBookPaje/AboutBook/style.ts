import styled from "styled-components";

const AboutBookSC = styled.div`
  color: ${({ theme }) => theme.textAxilary};
`;
const AboutBookImgSC = styled.a`
  width: 300px;
  height: 423px;

  img {
    width: 300px;
    height: 423px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;
const AboutBookMainInfoSC = styled.div`
  position: relative;
  margin-left: 30px;
  li {
    line-height: 200%;
  }
`;

const AboutBookTopSC = styled.div`
  display: flex;
  a {
    font-size: 20px;
    color: ${({ theme }) => theme.textAxilary};
  }
`;
const ABDescriptionSC = styled.p`
  text-indent: 50px;
  line-height: 150%;
  margin-top: 20px;

  max-height: 336px;
  overflow-y: auto;
  padding: 10px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;
const AB_TitleSC = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin: 10px 0px 30px 0px;
`;
const AB_ParasSC = styled.div`
  display: flex;
`;
const AB_ParasTitleSC = styled.ol`
  list-style-type: disc;
  padding-left: 15px;
`;
const AB_Description = styled.ol`
  list-style-type: none;
`;
const AB_OpenGoogleBook = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
`;
export const useAboutBookStyle = () => ({
  AB_TitleSC,
  AboutBookSC,
  AboutBookTopSC,
  AboutBookImgSC,
  ABDescriptionSC,
  AboutBookMainInfoSC,
  AB_ParasSC,
  AB_ParasTitleSC,
  AB_Description,
  AB_OpenGoogleBook,
});
