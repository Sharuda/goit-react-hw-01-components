import { getRandomHexColor } from '../utils/getRandomColor';
import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 400px;
  margin-bottom: 50px;

  background-color: #d4d0d04d;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 25px;

  text-align: center;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  background-color: ${props => getRandomHexColor()};
`;

export const Label = styled.span`
  font-size: 16px;
`;

export const Percentage = styled.span`
  font-size: 20px;
`;
