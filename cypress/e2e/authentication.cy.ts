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

        // Click sign up link
        cy.contains('Sign up').click();

        // Should be redirected to signIn page
        cy.url().should('include', '/signup');

         //Enter email and password to the signup form
        cy.signupJohnSmith()

        // Click sign in link
        cy.contains('Sign in').click();

        //Enter email and password to the form
        cy.signinJohnSmith();

        // Should be redirected to Accounts
        cy.url().should('include', '/accounts');

        // Should have username
        cy.contains('John Smith');

        // Contains signout icon and Should SignOut on click of svg
        cy.get('.navbar__info svg').should('be.visible');
        cy.get('.navbar__info svg').click();

        // Should be directed to homepage
        cy.url().should('include', '/');
    })
}) 