import styled from "styled-components";

const SearchWrapSC = styled.form`
  display: flex;
  border: 1px solid;
`;
const SearchSC = styled.input`
  width: 420px;
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
