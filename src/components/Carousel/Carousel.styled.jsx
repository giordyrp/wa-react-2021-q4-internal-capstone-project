import styled from 'styled-components';
import { Card } from '../Card/Card.styled';
import Section from '../Section';
import Button from '../Button';

export const Carousel = styled(Section)`
  padding: 1rem 2rem;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: nowrap;

  ${Card} {
    margin: 0 1rem;
    flex-grow: 0;
    flex-shrink: 0;
  }
`;

export const Controls = styled.div`
  right: 20px;
  top: 20px;
`;

export const Control = styled(Button)`
  margin-left: 5px;
  background: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;