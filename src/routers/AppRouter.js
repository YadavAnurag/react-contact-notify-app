import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactDashboardPage from '../components/ContactDashboardPage/ContactDashboardPage';
import ContactInfoPage from '../components/ContactInfoPage/ContactInfoPage';
import Header from '../components/Header/Header';
import MessagesPage from '../components/MessagesPage/MessagesPage';
import NewMessagePage from '../components/NewMessagePage/NewMessagePage';


const AppRouter = ()=>(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={ContactDashboardPage} exact={true} />
        <Route path='/info/:id' component={ContactInfoPage} exact={true} />
        <Route path='/compose/:id' component={NewMessagePage} exact={true} />
        <Route path='/messages' component={MessagesPage} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;