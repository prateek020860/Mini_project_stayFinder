// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
// import App from './App.jsx'
import { Routing } from './Routing.jsx';
// import {Navbar} from './navBar.jsx'
// import { ProductListing } from './listing.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>,
)
