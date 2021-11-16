import styled from 'styled-components';
import Card from '../Card';

export const CategoryCard = styled(Card)`
  width: 180px;
  height: 160px;
  margin: 0 1rem;
  cursor: pointer;
  
  p {
    margin: 0 10px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 160px;
    height: 140px;
  }
`;

export const Cover = styled.img`
  height: 100px;
`;