import styled from 'styled-components';



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