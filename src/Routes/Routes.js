/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { createBrowserHistory } from "history";
//import Demo from "../Demo";

import { Amplify } from 'aws-amplify';
import { Auth } from '@aws-amplify/auth';

import awsconfig from '../aws-exports';
//import Reinitialize from "../Reinitialize";
//import RefreshCredentials from "../RefreshCredentials";
//updateWebSocketCredentials - routes
//import UpdateWebSocket from "../UpdateWebSocket";
//import RefreshUpdateWebSocket from "../RefreshUpdateWebSocket";
//import Demo2 from "../Demo2";
import Demo3 from "../Demo3";
import Demo4 from "../Demo4";

Amplify.configure(awsconfig);
// >>New - Configuring Auth Module
Auth.configure(awsconfig);

const history = createBrowserHistory();
export default function Routes1(props) {
  return (
    <Router history={history} basename="/" forceRefresh={true}> 
      <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/demo3" element={<Demo3/>}/>
            <Route exact path="/demo4" element={<Demo4/>}/>
      </Routes>
    </Router>
  );
}

function Home(props){
    return(
        <h1 className="h3 mb-2 text-gray-800" style={{ textAlign: "left", paddingLeft: "10px", fontSize: "20px" }}>Dashboard</h1>
    )
}
