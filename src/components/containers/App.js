import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import WbnPlayer from './WbnPlayer';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WbnPlayer} />
      <Route exact path="/:activeVideo" component={WbnPlayer} />
    </Switch>
  </BrowserRouter>
)

export default App;