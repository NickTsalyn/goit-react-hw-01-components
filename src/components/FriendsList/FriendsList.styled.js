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

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 20px;
  margin-left: 20px;

  background-color: ${({ status }) => {
    return status ? 'green' : 'red';
  }};
`;
