import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactDashboardPage from '../components/ContactDashboardPage/ContactDashboardPage';
import ContactInfoPage from '../components/ContactInfoPage/ContactInfoPage';
import Header from '../components/Header/Header';
import MessagesPage from '../components/MessagesPage/MessagesPage';
import NewMessagePage from '../components/NewMessagePage/NewMessagePage';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';
import './AppRouter.scss';

const AppRouter = ()=>(
  <BrowserRouter>
    <div>
      <Header />
      <div className='container'>
        <Switch>
          <Route path='/' component={ContactDashboardPage} exact={true} />
          <Route path='/info/:id' component={ContactInfoPage} exact={true} />
          <Route path='/compose/:id' component={NewMessagePage} exact={true} />
          <Route path='/messages' component={MessagesPage} exact={true} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;