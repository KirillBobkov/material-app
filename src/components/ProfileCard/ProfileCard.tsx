import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import AuthStore from '../../state/AuthStore';

const StyledCard = styled.div`
  min-height: 230px;
  width: 300px;
  background: #444444;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  box-shadow: -5px 5px 23px rgba(0, 0, 0, 0.5);
  color: #ffffff;
`;

const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  margin-right: 20px;
`;

const StyledRow = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

const StyledValue = styled.span`
  flex: 1 0 50%;
  color: #a7a7a7;
`;

const StyledKey = styled(StyledValue)`
  font-weight: 700;
  color: #ffffff;
`;

const ProfileCard = (): JSX.Element  => {
  const { profile } = AuthStore;

  const convertDate = (date: Date) => new Date(date).toLocaleString('en-GB');

  const cardConfig: Record<string, string> = profile ? {
    'E-mail:': profile.email ?? '_',
    'Registration date:': convertDate(profile.createdAt) ?? '_',
    'Last updated': convertDate(profile.updatedAt) ?? '_',
  } : {};

  return (
    <StyledCard>
      <StyledCardHeader>
        <Avatar
          width="40"
          height="40"
          src="https://img.icons8.com/dusk/64/000000/user.png"
          alt="User photo"
        />
        {profile ? <span>{`${profile.firstName} ${profile.lastName}`}</span> : ''}
      </StyledCardHeader>
      {Object.entries(cardConfig).map(([key, value]) => (
        <StyledRow key={key}>
          <StyledKey>{key}</StyledKey>
          <StyledValue>{value}</StyledValue>
        </StyledRow>
      ))}
    </StyledCard>
  );      
};

export default observer(ProfileCard);