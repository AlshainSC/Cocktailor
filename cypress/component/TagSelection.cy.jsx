import React from 'react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom'
import TagSelection from '../../src/routes/TagSelection.jsx'
import { useCocktailContext } from '../../src/contexts/CocktailProvider.jsx';

const cocktails = ['manhattan', 'negroni', 'whiskey', 'vodka']

describe('TagSelection.cy.jsx', () => {
  it('Tag selectors render successfully', () => {
    
    cy.mount(
      <useCocktailContext.Provider >
          <TagSelection />
      </useCocktailContext.Provider>
    );
    
    
  })
})