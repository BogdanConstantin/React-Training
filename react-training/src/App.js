import React from 'react';
import './App.css';
import Header from './header/header';
import Search from './search/search';
import Cocktails from './cocktails/cocktails';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ViewCocktail from './cocktails/cocktails-category/view-cocktail/view-cocktail';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Header/>
      <Search/>
        <Switch>
          <Route path='/details/:imageId' component={ViewCocktail}></Route>
          <Route path='/alcoholic' render={() => {return <div>alcoholic</div>}}></Route>
          <Route path='/nonAlcoholic' render={() => {return <div>nonAlcoholic</div>}}></Route>
          <Route path='/ordinaryDrink' render={() => {return <div>ordinaryDrink</div>}}></Route>
          <Route path='/cocktailGlass' render={() => {return <div>cocktailGlass</div>}}></Route>
          <Route path='/champagneFlute' render={() => {return <div>champagneFlute</div>}}></Route>
          <Route path='/' component={Cocktails}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
