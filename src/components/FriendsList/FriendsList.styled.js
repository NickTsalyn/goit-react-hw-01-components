import styled from 'styled-components';

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  li {
    display: flex;
    flex-direction: row;
    gap: 10px;
    background-color: white;
    width: 200px;
    border-radius: 10%;
    align-items: center;
  }
`;

