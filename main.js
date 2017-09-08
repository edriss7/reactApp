import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';

import {HashRouter, Route, Router, IndexRoute} from 'react-router-dom';

ReactDOM.render((
   <HashRouter>
      <switch>
         <Route path = "/" component = {App} />
         <Route path = "/home" component = {Home} />
         <Route path = "/about" component = {About} />
         <Route path = "/contact" component = {Contact} />
      </switch>
   </HashRouter>
	
), document.getElementById('app'))