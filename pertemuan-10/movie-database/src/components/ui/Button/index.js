// IMPORT STYLED
import styled, { css } from "styled-components";

// BUAT COMPONENT BUTTON
const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #4361ee;
  cursor: pointer;

  // PROPS VARIANT
  background-color: ${({ variant, theme }) =>
    theme.colors[variant] || theme.colors.primary};

  // PROPS FULL
  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `};
`;

// EXPORT BUTTON
export default Button;
