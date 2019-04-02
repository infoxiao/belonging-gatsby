import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe_9nQ2ABRe-lSvEj3YueEcoCACTnEXOfya_5CAZ97nA-YzAA/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit Design
        </a>
      </li>
    </ul>
  </Container>
);

export default Nav;
