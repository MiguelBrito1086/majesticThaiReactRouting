import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Find from './components/Findus';
import BaseLayout from './components/Layout';
//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
//IMPORT COMPONENTS



ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/Findus' component={Find} />
        <Route path='/Menu' component={Menu}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
