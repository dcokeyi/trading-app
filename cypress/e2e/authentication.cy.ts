import React from 'react';

describe('SignIn button', function() {
    it('renders correctly', function () {
        //Go to hoempage 
        cy.visit('/');

        //verify sign in button is on page
        cy.contains('Sign In');

        // Click sign in button
        cy.contains('Sign In').click();

        // Should be redirected to signIn page
        cy.url().should('include', '/signin');

        //Enter email and password to the form
        cy.get('form').within(() => {
            cy.get('input[name="email"]').type('john.doe@example.com');
            cy.get('input[name="password"]').type('password');
          });

        //verify sign in button is on page
        cy.contains('Sign in');

        // Click sign in button
        cy.contains('Sign in').click();

        // Should be redirected to Accounts
        cy.url().should('include', '/account');
    })
}) 