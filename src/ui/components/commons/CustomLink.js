import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ({ children, ...props }) {
  return <StyledLink to={props.to}>{children}</StyledLink>;
}

const StyledLink = styled(Link)`
  color: ${(props) => props.textColor};
  color: "white";
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
