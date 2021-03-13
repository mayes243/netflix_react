import React from 'react';
import MainPage from './pages/MainPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import ChoosePlan from './pages/ChoosePlan';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/choose-plan' exact component={ChoosePlan} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
