import { mount } from 'cypress/react18'
import React from 'react';

import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom'
import LandingPage from '../../src/routes/Home.jsx'



describe('Landing page', () => {
  it('Landing page renders successfuly', () => {
    mount(
      <Router>
        <>
          <LandingPage/>
        </>
      </Router>
      );
    
    cy.get('h3').should('be.visible');
    cy.get('h3').should('contain.text', 'Are You Unsure About What To Order At Your Favourite Bar?');
  })

  it('Start button successfuly routes user to tag selection', () => {
    mount(
      <Router>
        <>
          <LandingPage/>
        </>
      </Router>);

    cy.contains('Bottoms Up!').click().location('pathname').should('equal', '/tagselection')
  });
})