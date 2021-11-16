import styled from 'styled-components';

export const FlexDiv = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify ?? 'center'};
  align-items: ${({ align }) => align ?? 'center'};
  flex-direction: ${({ direction }) => direction ?? 'unset'};
  flex: ${({ flex }) => flex ?? 'unset'};
  width: ${({ width }) => width ?? 'unset'};
  flex-wrap: ${({ wrap }) => wrap ?? 'wrap'};
`;