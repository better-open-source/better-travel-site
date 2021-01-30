import styled from 'styled-components';
import { Link } from 'gatsby';

export interface ButtonProps {
  primary?: boolean;
  big?: boolean;
  round: boolean;
  style?: string;
  css?: string;
}

const Button = styled(Link) <ButtonProps>`
  background: ${({ primary }) => (primary ? '#1976d2' : '#077BF1')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
  color: #fff;
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? '50px' : 'none')};

  &:hover {
    background: ${({ primary }) => (primary ? '#0964bd' : '#F26A2E')};
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
  }
`;

Button.defaultProps = {
  big: false,
};

export { Button };