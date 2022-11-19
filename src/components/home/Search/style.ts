import styled from "styled-components";

const SearchWrapSC = styled.form`
  display: flex;
  border: 1px solid;
  margin: 20px 0px;
  max-width: 420px;
  width: 90%;
`;
const SearchSC = styled.input`
  width: 100%;

  font-size: 20px;
  border: none;
  outline: none;
  line-height: 170%;
  padding-left: 7px;
`;
const SearcButtonSC = styled.button`
  background-color: white;
  border: none;
`;
export const useSearchStyle = () => ({
  SearchSC,
  SearchWrapSC,
  SearcButtonSC,
});
