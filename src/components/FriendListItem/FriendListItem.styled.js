import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 4px;

  max-width: 100%;
  width: 360px;
  border-radius: 8px;
`;

export const Status = styled.span`
  display: block;
  margin-left: 1.625rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;

  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-left: 10px;
  color: #000;
  font-size: 16px;
  font-weight: 700;
`;
