import React from 'react';
import './App.css';
import Header from './header/header';
import Search from './search/search';
import Cocktails from './cocktails/cocktails';
import { Route, Switch } from 'react-router-dom';
import ViewCocktail from './cocktails/cocktails-category/view-cocktail/view-cocktail';

function App() {
  return (
    <div>
      <Header/>
      <Search/>
      <Switch>
        <Route exact path='/' component={Cocktails}></Route>
        <Route exact path='/details/:imageId' component={ViewCocktail}></Route>
      </Switch>
    </div>
  );
}

export default App;
