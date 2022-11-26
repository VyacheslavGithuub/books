import styled from "styled-components";

const AboutBookSC = styled.div`
  color: ${({ theme }) => theme.textAxilary};
`;
const AboutBookImgSC = styled.a`
  width: 300px;
  max-height: 423px;
  transition: 0.2s all;
  img {
    width: 300px;
    height: 423px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  @media (max-width: 750px) {
    width: 200px;
    height: 323px;
    img {
      width: 200px;
      height: 323px;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    width: 100%;
    justify-content: center;
    height: calc(100vh - 400px);
    max-height: 423px;
    margin-bottom: 10px;

    img {
      max-width: 300px;
      width: calc(100vw - 100px);
      height: 100%;
    }
  }
  @media (max-width: 450px) {
    height: calc(100vh - 420px);
    max-height: 325px;
    justify-content: left;

    img {
      max-width: 200px;
      border: 1px solid;
    }
  }
`;
const AboutBookMainInfoSC = styled.div`
  position: relative;
  margin-left: 30px;
  li {
    line-height: 200%;
  }
  @media (max-width: 750px) {
    margin-left: 15px;
  }
  @media (max-width: 450px) {
    margin-left: 0px;
  }
`;

const AboutBookTopSC = styled.div`
  padding: 20px 15px;
  display: flex;
  a {
    font-size: 20px;
    color: ${({ theme }) => theme.textAxilary};
  }
  @media (max-width: 750px) {
    padding: 10px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const ABDescriptionSC = styled.p`
  text-indent: 50px;
  line-height: 150%;
  min-height: 100px;
  max-height: calc(100vh - 510px);
  overflow-y: auto;
  padding: 10px 20px 0px 20px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  @media (max-width: 750px) {
    max-height: calc(100vh - 478px);
    box-shadow: none;
    padding: 10px 10px 0px 10px;
    text-align: justify;
    min-height: 246px;
  }
  @media (max-width: 450px) {
    text-indent: 25px;
    padding: 0px 7px 10px 0px;
    font-size: 14px;
  }
`;

const AB_OpenGoogleBook = styled.a`
  position: absolute;
  bottom: 0px;
  left: 0px;

  @media (max-width: 750px) {
    font-size: 16px !important;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const AB_PhotoSection_SC = styled.div`
  @media (max-width: 450px) {
    position: relative;
    display: flex;
  }
`;
const IconArrowLeftSC = styled.div`
  display: none;
  @media (max-width: 450px) {
    display: flex;
    position: absolute;
    right: 15px;
    top: calc(50% - 40px);
    fill: ${({ theme }) => theme.textAxilary};
  }
`;
export const useAboutBookStyle = () => ({
  AboutBookSC,
  AboutBookTopSC,
  AboutBookImgSC,
  ABDescriptionSC,
  AboutBookMainInfoSC,
  AB_OpenGoogleBook,
  AB_PhotoSection_SC,
  IconArrowLeftSC,
});
