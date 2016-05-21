import React, { Component } from 'react';
import { Link } from 'react-router';
import './NotFoundPage.css';

export default NotFoundPage = (props) => (
  <div className="error">
    <div className="error-code m-b-10 m-t-20">404 <i className="fa fa-warning"></i></div>
    <h3 className="font-bold">We couldn't find the page..</h3>
  
    <div className="error-desc">
      Sorry, but the page you are looking for was either not found or does not exist. <br/>
      Try refreshing the page or click the button below to go back to the Homepage.
      <div>
        <Link to="/" className="login-detail-panel-button btn">
          <i className="fa fa-arrow-left"></i>
          Go back to Homepage
        </Link>
      </div>
    </div>
  </div>
);