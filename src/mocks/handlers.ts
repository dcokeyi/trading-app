import { graphql } from "msw";
import {v4 as uuidv4} from "uuid"
import { AuthService } from "../services";
import { Storage } from "../utils";

export const handlers = [
  graphql.mutation('SignIn', (req, res, ctx) => {
    const { credentials } = req.variables;
    const { email, password } = credentials;

    // Retrieve keys from Local Storage
    const keys = Object.keys(localStorage);

    // Iterate over the keys to find user
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let storedUser = null;

    keys.forEach((key) => {
      if (key.startsWith('mock_')) {
        const user = Storage.get(key);
        console.log(user)

        if (email === user.email && password === user.password) {
          storedUser = user
        }
      }
    });

    if (storedUser) {
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
    } else {
      return res(
        ctx.errors([
          {
            message: 'Email or password did not match',
            errorType: 'Unauthorized',
          },
        ])
      );
    }
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
  }), 

  graphql.mutation('SignUp', (req, res, ctx) => {
    const { signUpInput } = req.variables;
    const {name, email, password} = signUpInput
    const id = `mock_${uuidv4()}`

    Storage.set(id, signUpInput)

    return res(
      ctx.data({
        signUp: {
          __typename: 'UserInfo',
          user: {
            __typename: 'User',
            id: uuidv4(),
            name: name,
            email: email,
            password: password
          },
          accessToken: uuidv4(),
        },
      })
    );

  })
];