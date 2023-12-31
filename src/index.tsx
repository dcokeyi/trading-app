import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { GraphQlUtils } from './utils';
import { App } from './App';
import { ErrorBoundary, Loading } from './components';
import { AuthContextProvider, EnvProvider } from './contexts';
import reportWebVitals from './reportWebVitals';
import './styles/main.css';

// Start mock service worker
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
  worker.printHandlers();
}


// Create Apollo Client
const apolloClient = GraphQlUtils.createApolloClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Suspense fallback={<Loading />}>
    <ErrorBoundary>
      <EnvProvider>
        <ApolloProvider client={apolloClient}>
          <AuthContextProvider>
            <Router>
              <App />
            </Router>
          </AuthContextProvider>
        </ApolloProvider>
      </EnvProvider>
    </ErrorBoundary>
  </Suspense>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
