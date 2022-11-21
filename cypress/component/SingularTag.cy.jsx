import React from 'react';
import SingularTag from '../../src/routes/SingularTag'
import CocktailContext from '../../src/contexts/CocktailProvider'
import Cocktails from '../fixtures/db'




const tag = 'butt'

describe('Singular tags', () => {

  beforeEach(() => {
    cy.mount(
      <CocktailContext>
        <SingularTag tag={tag} />
      </CocktailContext>
      
    )
  })

  it('should render the singular tag', () => {
    cy.get('h1').should('exist')
  });

  it('Should capitalize the singular tag', () => {
    cy.get('#tags').contains(/.*/, {matchCase: true})
  });
})