import React from "react";
//import pagenotfound image
import pagenotfoundImage from "../images/pagenotfound.jpg";
//react router dom
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Redirect,
} from "react-router-dom";
import { Helmet } from 'react-helmet'


export default function NotFound404() {
  return (
    <Router>
      <Helmet>
        <title>pageNotFound</title>
        <meta name="description" content="Page Not Found" />
      </Helmet>
      <Routes>
        <div className="pageNotFound">
          <h1>Oops..! 404 Page Not Found</h1>
          <p>Looks like you came to wrong page on our server</p>
          <img
            src={pagenotfoundImage}
            height="500"
            width="500"
            alt="not found"
          />
        </div>
      </Routes>
    </Router>
  );
}
