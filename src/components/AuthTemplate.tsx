import React from "react";
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from "../styles";

// Styles
const Container = styled.div`
  position: absolute;
  width: 420px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: 0.5s ease-out 0s 1 fadeIn;
  ${shadow(1)};
  .logo {
    background: ${oc.cyan[5]};
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      color: white;
      font-size: 2rem;
      font-weight: 700;
      text-decoration: none;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    background: white;
    padding: 2rem;
    height: auto;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

interface Props {}

const AuthTemplate: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <div className="logo">
        <a href="/">Forcepoint Insider Threat</a>
      </div>

      <div className="content">{children}</div>
    </Container>
  );
};

export default AuthTemplate;