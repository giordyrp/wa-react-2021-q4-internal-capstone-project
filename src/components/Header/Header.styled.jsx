import styled from 'styled-components';

export const Nav = styled.div`
  margin: 0 auto;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
`;

export const MenuLink = styled.a`
  padding: 1rem;
  text-decoration: none;
  color: black;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Menu = styled.nav`
  display: flex;

  ${MenuLink}:first-child {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-right: 15px;
  
  span {
    height: 2px;
    width: 25px;
    margin-bottom: 4px;
    border-radius: 5px;
    background-color: black;
  }
`;