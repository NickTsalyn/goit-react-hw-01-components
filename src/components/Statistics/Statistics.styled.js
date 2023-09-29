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


export const TitleWrapper = styled.div`
  text-align: center;
`;
export const TitleText = styled.h2`
  padding: 15px 0;
`;