import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: center;
  text-align: center;
`;

export const Photo = styled.img`
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 1px solid black;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  text-align: center;
`;
