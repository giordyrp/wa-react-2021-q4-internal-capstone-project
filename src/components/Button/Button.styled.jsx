import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 5px;
  color: ${({ type }) => type === 'primary' ? '#06f' : 'grey'};
  border: none;
  text-decoration: none;
  padding: 11px 13px;
  border-radius: ${({ rounded }) => rounded ? '50%' : '8px' };

  &:hover {
    cursor: pointer;
  }
`;