import styled from 'styled-components'
import { Col } from '../Col/Col.styled';
import FlexDiv from '../FlexDiv';

export const Row = styled(FlexDiv)`
  padding: 10px 0;
  
  ${Col} {
    padding: 8px;
  }
`;