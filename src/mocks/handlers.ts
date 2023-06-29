// import { rest } from 'msw';
// import { MOCK_API_URL } from './constants';
// import { mockMovies } from './mockMovies';

// export const handlers = [
//   rest.get(`${MOCK_API_URL}/top-10-movies`, (req, res, ctx) => {
//     return res(ctx.status(200), ctx.json(mockMovies));
//   }),
// ];

import { graphql } from "msw";
import {v4 as uuidv4} from "uuid"
import { AuthService } from "../services";

export const handlers = [
  graphql.mutation('SignIn', (req, res, ctx) => {
    const { credentials } = req.variables;
    const { email, password } = credentials;

    const isAuthenticated = email === 'jsmith@example.com' && password === 'cool';
    if (!isAuthenticated) {
      return res(
        ctx.errors([
          {
            message: 'Email or password did not match',
            errorType: 'Unauthorized',
          },
        ])
      );
    }

    return res(
      ctx.data({
        signIn: {
          __typename: 'UserInfo',
          user: {
            __typename: 'User',
            id: '8c8726cb-7f8a-4ebd-b5ec-3ea5a2c144ab',
            name: 'John Smith',
            email: 'jsmith@example.com',
          },
          accessToken: uuidv4(),
        },
      })
    );
  }),

  graphql.query('GetUser', (req, res, ctx) => {
    const isTokenAvailable = AuthService.getAccessToken();

    if(!isTokenAvailable) {
      return res(
        ctx.errors([
          {
            message: 'Not authenticated',
            errorType: 'AuthenticationError',
          },
        ]),
      )
    }

    return res(
      ctx.data({
        user: {
          __typename: 'User',
          id: '8c8726cb-7f8a-4ebd-b5ec-3ea5a2c144ab',
          name: 'John Smith',
          email: 'jsmith@example.com',
        }
      })
    )
  })
];