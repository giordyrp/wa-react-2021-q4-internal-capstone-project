import styled, { css } from 'styled-components';

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
  display: block;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Menu = styled.nav`
  display: flex;
  background-color: white;

  ${MenuLink}:first-child {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    left: -100%;
    top: 64px;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    border-radius: 0 0 8px 8px;
    text-align: center;
    transition: 0.3s;
    z-index: 2;
    ${({ active }) => active && css`
      left: 0
    `}
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-right: 15px;
  z-index: 3;
  transition: 0.3s;
  
  span {
    height: 2px;
    width: 25px;
    margin-bottom: 4px;
    border-radius: 5px;
    background-color: black;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  ${({ active }) => active && css`
    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    span:nth-child(3) {
      transform: translateY(-4px) rotate(-45deg);
    }
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
    
`;