import { mount } from 'cypress/react18'
import React from 'react';

import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom'
import LandingPage from '../../src/routes/Home.jsx'



describe('Landing page', () => {

  beforeEach(() => {
    mount(
      <Router>
          <LandingPage/>
      </Router>
      );
  })

  it('Landing page renders successfuly', () => {
    
    cy.get('h3').should('be.visible');
    cy.get('h3').should('contain.text', 'Are You Unsure About What To Order At Your Favourite Bar?');
  })

  it('Start button successfuly routes user to tag selection', () => {
    
    cy.contains('Bottoms Up!').click().location('pathname').should('equal', '/tagselection')
  });
})