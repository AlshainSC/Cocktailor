import React from 'react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom'
import TagSelection from '../../src/routes/TagSelection.jsx'
import CocktailContext from '../../src/contexts/CocktailProvider.jsx';


describe('Tag selection', () => {

  beforeEach(() => {
    cy.mount(
      <Router>
        <CocktailContext>
          <TagSelection />
        </CocktailContext>
      </Router>
    );
  })

  it('Tag selectors render successfully', () => {
    cy.get('#tags').should('be.visible');
    cy.get('.singularTag').should('contain.html', 'h1')
  })

  it('Tags should be clickable', () => {
    cy.get('.singularTag').click({multiple: true})
  });

  it('Mix it up button should work', () => {
    cy.contains('Mix it up!').click().location('pathname').should('equal', '/cocktaillist')
  })

  it('Surprise me button should generate a random cocktail', () => {
    cy.contains('Surprise Me!').click().location('pathname').should('equal', '/cocktaillist')
  });
})