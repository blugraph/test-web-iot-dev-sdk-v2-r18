import './App.css';
import Routes1 from './Routes/Routes';
import React from 'react';
//import { withAuthenticator } from "aws-amplify-react";
import awsconfig from './aws-exports';
import { Amplify } from 'aws-amplify';
import { Auth } from '@aws-amplify/auth';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

//(window as any)['global'] = window; global.Buffer = global.Buffer || require('buffer').Buffer;
//window.Buffer = window.Buffer || require("buffer").Buffer;

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
	     <Routes1 />
        </main>
      )}
    </Authenticator>
  );
}



