import styled from "styled-components";

const MyBooksSC = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const MyBooks_Notes_SC = styled.div`
  width: 100%;
  background-color: #e1f5fe;
  padding: 15px;

  b {
    font-weight: 500;
  }
  a {
    color: #01579b;
  }
`;
const MyBooks_Description_SC = styled.p`
  color: #01579b;
  line-height: 150%;
`;

export const useMyBooksStyle = () => ({
  MyBooksSC,
  MyBooks_Notes_SC,
  MyBooks_Description_SC,
});
