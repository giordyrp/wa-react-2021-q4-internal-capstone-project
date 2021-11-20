import styled, { css } from 'styled-components';

export const Button = styled.button`
  border: none;
  padding: 11px 13px;
  border-radius: ${({ rounded }) => rounded ? '50%' : '8px' };

  ${({ theme, type }) => {
    const colors = {
      primary: ['white', theme.colors.primary],
      transparent: ['balck', 'transparent']
    };

    return type && css`
      color: ${colors[type][0]};
      background-color: ${colors[type][1]};
    `;
  }}

  &:hover {
    cursor: pointer;
  }
`;