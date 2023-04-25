import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 400px;
  margin-top: 20px;
  margin-bottom: 50px;

  border-radius: 10px;
  box-shadow: 0 0 3px rgba(228, 203, 203, 0.82);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Avatar = styled.img`
  width: 50%;
  margin-top: 50px;
  margin-bottom: 30px;
  border-radius: 50%;
  box-shadow: 0 0 3px 0px #8075754d;
`;

export const Name = styled.p`
  margin-top: 10px;
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
  color: black;
`;

export const Tag = styled.p`
  margin-top: 5px;
  font-weight: 500;
  font-size: 25px;
  color: gray;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  margin-top: 5px;
  font-weight: 700;
  font-size: 20px;
  color: gray;
  margin-bottom: 45px;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100px;

  list-style: none;
  background-color: #ddd9d94d;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  border-right: 2px solid lightgray;
`;

export const Label = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: gray;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
