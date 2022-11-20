import styled from "styled-components";

const HeaderSC = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.auxiliary};
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  @media (max-width: 750px) {
    height: 70px;
  }
`;
const HeaderItemSC = styled.li`
  width: 25%;
  text-transform: uppercase;
  list-style-type: none;
  text-align: center;
  font-size: 24px;

  a {
    cursor: pointer;
    font-weight: 400;
    position: relative;
    color: ${({ theme }) => theme.ordinary};
    cursor: pointer;
    line-height: 1; /*задаём высоту строки*/
    text-decoration: none; /*убираем подчёркивание*/

    &:after {
      display: block;
      position: absolute;
      left: 0; /*изменить на right:0;, чтобы изменить направление подчёркивания */
      width: 0; /*задаём длинну линии до наведения курсора*/
      height: 2px; /*задаём ширину линии*/
      background-color: ${({ theme }) => theme.ordinary}; /*задаём цвет линии*/
      content: "";
      transition: width 0.3s ease-out; /*задаём время анимации*/
    }
  }
  a:hover:after,
  a:focus:after {
    width: 100%; /*устанавливаем значение 100% чтобы ссылка подчёркивалась полностью*/
  }

  @media (max-width: 750px) {
    font-size: 20px;
  }
`;

export const useHeaderStyled = () => ({
  HeaderSC,
  HeaderItemSC,
});
