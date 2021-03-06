import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const Menu = styled.ol`
  li {
    font-size: 2rem;
  }
`;

const GameMain = () => {
  return (
    <Menu>
      <li>
        <StyleLink to="/">Main</StyleLink>
      </li>
      <li>
        <StyleLink to="/gugudan">Gugudan</StyleLink>
      </li>
      <li>
        <StyleLink to="/wordrelay">WordRelay</StyleLink>
      </li>
      <li>
        <StyleLink to="/numberbaseball">NumberBaseball</StyleLink>
      </li>
      <li>
        <StyleLink to="/find">FindingLocation</StyleLink>
      </li>

      <li>
        <StyleLink to="/response">ResponseTimeCheck</StyleLink>
      </li>
      <li>
        <StyleLink to="/rsp">RSP</StyleLink>
      </li>
    </Menu>
  );
};

export default GameMain;
