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

        //verify sign in button is on page
        cy.contains('Sign in');

        // Click sign in button
        cy.contains('Sign in').click();

        // Screen should have email and password required field
        cy.contains('email is required field');
        cy.contains('password is required field');

        // Should be redirected to Accounts
        cy.url().should('include', '/signin');
    })
}) 