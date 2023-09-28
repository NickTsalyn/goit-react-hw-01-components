import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;

  li > span {
    display: block;
  }

  li {
    width: 100px;
    display: flex;
    text-align: center;
    flex-direction: column;
    gap: 20px;
  }
`;


export const StatWrapper = styled.section`
  padding-top: 40px;
`;
