import styled from 'styled-components';


export const List = styled.ul`
display: flex;
list-style: none;
li>span {
    display: block;
}
li {
    width: 100px;
    display: flex;
    text-align: center;
    flex-direction: column;
    gap: 20px;
    background-color: white;
    }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;

`;

export const StatWrapper = styled.section`
  padding-top: 40px;
`;

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
//   }


