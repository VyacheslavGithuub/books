import styled from "styled-components";

const AboutProjectSC = styled.section`
  padding: 15px 0px 15px 15px;

  a {
    color: ${({ theme }) => theme.textAxilary};
  }

  ul,
  ol {
    padding-left: 17px;
  }
  ol {
    list-style-type: upper-roman;
  }
  ul {
    margin-bottom: 15px;
    list-style-type: disc;
    &:nth-last-child() {
      margin-bottom: 0px;
    }
    li {
      line-height: 150%;
    }
  }
`;
const AP_TitleSC = styled.h2`
  font-weight: 400;
  margin-bottom: 5px;
`;
const AP_Description_SC = styled.p`
  text-indent: 15px;
  text-align: justify;
  line-height: 150%;
  padding-right: 15px;
  margin-top: 5px;
`;

export const useAboutProjectStyle = () => ({
  AP_TitleSC,
  AboutProjectSC,
  AP_Description_SC,
});
