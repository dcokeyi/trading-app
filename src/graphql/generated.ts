import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type Account = {
  __typename?: 'Account';
  assetAllocations: Array<AssetAllocation>;
  cashBalance: Scalars['Float']['output'];
  holdings: Array<Holding>;
  id: Scalars['ID']['output'];
  investmentTotal: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  orders: Array<Order>;
  owner: User;
  performance: Array<Series>;
  transactions: Array<Transaction>;
};

export type AssetAllocation = {
  __typename?: 'AssetAllocation';
  categoryId: Scalars['String']['output'];
  categoryName: Scalars['String']['output'];
  children?: Maybe<Array<AssetAllocation>>;
  percentage: Scalars['Float']['output'];
  value: Scalars['Float']['output'];
};

export type CashTransfer = {
  __typename?: 'CashTransfer';
  account: Account;
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['ID']['output'];
  direction: Direction;
  id: Scalars['ID']['output'];
  type: TransactionType;
};

export type Credentials = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type DataPoint = {
  __typename?: 'DataPoint';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export enum Direction {
  In = 'IN',
  Out = 'OUT',
}

export type Holding = {
  __typename?: 'Holding';
  account: Account;
  id: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  security: Security;
  value: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** place a buy or sell order for a security */
  placeOrder: Order;
  /** signs in the user with the specified credentials and returns an access token for future requests */
  signIn: UserInfo;
  /** invalidates the access token that was used to sign in and returns it */
  signOut: Scalars['String']['output'];
  /** signs up a new user and returns an access token for future requests */
  signUp: UserInfo;
  /** transfers cash in or out of an account */
  transferCash: CashTransfer;
};

export type MutationPlaceOrderArgs = {
  orderInput: OrderInput;
};

export type MutationSignInArgs = {
  credentials: Credentials;
};

export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};

export type MutationTransferCashArgs = {
  transferCashInput: TransferCashInput;
};

export type Order = {
  __typename?: 'Order';
  account: Account;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  limitPrice?: Maybe<Scalars['Float']['output']>;
  quantity: Scalars['Int']['output'];
  security: Security;
  side: Side;
  status: OrderStatus;
  type: OrderType;
};

export type OrderInput = {
  accountId: Scalars['ID']['input'];
  limitPrice?: InputMaybe<Scalars['Float']['input']>;
  quantity: Scalars['Int']['input'];
  side: Side;
  symbol: Scalars['ID']['input'];
  type: OrderType;
};

export enum OrderStatus {
  Canceled = 'CANCELED',
  Executed = 'EXECUTED',
  New = 'NEW',
  Placed = 'PLACED',
}

export enum OrderType {
  Limit = 'LIMIT',
  Market = 'MARKET',
}

export type Query = {
  __typename?: 'Query';
  /** returns the account with the specified accountId */
  account?: Maybe<Account>;
  /** returns the accounts owned by the requesting user */
  accounts: Array<Account>;
  /** returns the holdings for the specified account */
  holdings: Array<Holding>;
  /** returns the orders for the specified account */
  orders: Array<Order>;
  /** returns all securities whose id or name matches the query string */
  securities: Array<Security>;
  /** returns the transactions for the specified account */
  transactions: Array<Transaction>;
  /** returns the user identified by the access token in the request header */
  user: User;
};

export type QueryAccountArgs = {
  accountId: Scalars['ID']['input'];
};

export type QueryHoldingsArgs = {
  accountId: Scalars['ID']['input'];
};

export type QueryOrdersArgs = {
  accountId: Scalars['ID']['input'];
};

export type QuerySecuritiesArgs = {
  query: Scalars['String']['input'];
};

export type QueryTransactionsArgs = {
  accountId: Scalars['ID']['input'];
};

export type Security = {
  __typename?: 'Security';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
};

export type Series = {
  __typename?: 'Series';
  data: Array<DataPoint>;
  name: Scalars['String']['output'];
};

export enum Side {
  Buy = 'BUY',
  Sell = 'SELL',
}

export type SignUpInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Trade = {
  __typename?: 'Trade';
  account: Account;
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  quantity: Scalars['Int']['output'];
  security: Security;
  side: Side;
  type: TransactionType;
};

export type Transaction = CashTransfer | Trade;

export enum TransactionType {
  CashTransfer = 'CASH_TRANSFER',
  Trade = 'TRADE',
}

export type TransferCashInput = {
  accountId: Scalars['ID']['input'];
  amount: Scalars['Float']['input'];
  direction: Direction;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UserInfo = {
  __typename?: 'UserInfo';
  accessToken: Scalars['String']['output'];
  user: User;
};

export type GetUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserQuery = {
  __typename?: 'Query';
  user: { __typename?: 'User'; id: string; name: string; email: string };
};

export type UserFieldsFragment = {
  __typename?: 'User';
  id: string;
  name: string;
  email: string;
};

export type UserInfoFieldsFragment = {
  __typename?: 'UserInfo';
  accessToken: string;
  user: { __typename?: 'User'; id: string; name: string; email: string };
};

export type AccountFieldsFragment = {
  __typename?: 'Account';
  id: string;
  name: string;
};

export type NetWorthFieldsFragment = {
  __typename?: 'Account';
  investmentTotal: number;
  cashBalance: number;
};

export type AssetAllocationFieldsFragment = {
  __typename?: 'AssetAllocation';
  categoryId: string;
  categoryName: string;
  value: number;
  percentage: number;
  children?: Array<{
    __typename?: 'AssetAllocation';
    categoryId: string;
    categoryName: string;
    value: number;
    percentage: number;
  }> | null;
};

export type HoldingFieldsFragment = {
  __typename?: 'Holding';
  id: string;
  quantity: number;
  value: number;
  security: {
    __typename?: 'Security';
    id: string;
    name: string;
    price: number;
  };
};

export type SeriesFieldsFragment = {
  __typename?: 'Series';
  name: string;
  data: Array<{ __typename?: 'DataPoint'; x: number; y: number }>;
};

export type GetAccountsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAccountsQuery = {
  __typename?: 'Query';
  accounts: Array<{ __typename?: 'Account'; id: string; name: string }>;
};

export type SignInMutationVariables = Exact<{
  credentials: Credentials;
}>;

export type SignInMutation = {
  __typename?: 'Mutation';
  signIn: {
    __typename?: 'UserInfo';
    accessToken: string;
    user: { __typename?: 'User'; id: string; name: string; email: string };
  };
};

export type SignUpMutationVariables = Exact<{
  signUpInput: SignUpInput;
}>;

export type SignUpMutation = {
  __typename?: 'Mutation';
  signUp: {
    __typename?: 'UserInfo';
    accessToken: string;
    user: { __typename?: 'User'; id: string; name: string; email: string };
  };
};

export const UserFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserFieldsFragment, unknown>;
export const UserInfoFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UserInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserInfoFieldsFragment, unknown>;
export const AccountFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AccountFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Account' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AccountFieldsFragment, unknown>;
export const NetWorthFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NetWorthFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Account' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'investmentTotal' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cashBalance' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NetWorthFieldsFragment, unknown>;
export const AssetAllocationFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetAllocationFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AssetAllocation' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'categoryId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'categoryName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          { kind: 'Field', name: { kind: 'Name', value: 'percentage' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'children' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'categoryId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'categoryName' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                { kind: 'Field', name: { kind: 'Name', value: 'percentage' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AssetAllocationFieldsFragment, unknown>;
export const HoldingFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'HoldingFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Holding' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'security' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HoldingFieldsFragment, unknown>;
export const SeriesFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SeriesFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Series' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'data' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'x' } },
                { kind: 'Field', name: { kind: 'Name', value: 'y' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SeriesFieldsFragment, unknown>;
export const GetUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUser' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UserFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetAccountsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAccounts' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accounts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AccountFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AccountFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Account' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAccountsQuery, GetAccountsQueryVariables>;
export const SignInDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SignIn' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'credentials' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Credentials' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signIn' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'credentials' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'credentials' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UserInfoFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UserInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SignUp' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'signUpInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'SignUpInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signUp' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'signUpInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'signUpInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UserInfoFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserInfoFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UserInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
