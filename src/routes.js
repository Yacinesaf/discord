import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Main from './Main';
const createRoutes = () => (
  <BrowserRouter>
    <Route exact path='/' component={Main} />
    <Route exact path='/:title' component={Main} />
  </BrowserRouter>
);

export default createRoutes;