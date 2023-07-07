// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to signup to Bullsfirst.
         * @example cy.signup('John Smith', 'jsmith@example.com', 'let-me-in')
         */
        signup(name: string, email: string, password: string): Chainable<Element>;

        /**
         * Custom command to signin to Bullsfirst.
         * @example cy.signup('jsmith@example.com', 'let-me-in')
         */
        signin(email: string, password: string): Chainable<Element>;
  
        /**
         * Custom command to signup as John Smith.
         * @example cy.signupJohnSmith()
         */
        signupJohnSmith(): Chainable<Element>;

        /**
         * Custom command to signin as John Smith.
         * @example cy.signupJohnSmith()
         */
        signinJohnSmith(): Chainable<Element>;
      }
    }
}


Cypress.Commands.add('signup', (name, email, password) => {
    cy.get('input[name="name"]').type(name);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    // cy.get('input[name="confirmPassword"]').type(password);
    cy.contains('Sign Up')
    cy.contains('Sign Up').click();
  });

  Cypress.Commands.add('signin', ( email, password) => {
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.contains('Sign in')
    cy.contains('Sign in').click();
  });
  
  Cypress.Commands.add('signupJohnSmith', () => {
    cy.signup('John Smith', 'jsmith@example.com', 'let-me-in');
  });

  Cypress.Commands.add('signinJohnSmith', () => {
    cy.signin('jsmith@example.com', 'let-me-in');
  });
  
  // Convert this to a module instead of script (allows import/export)
  export {};