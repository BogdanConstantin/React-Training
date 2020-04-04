import React, { Component } from 'react';
import CocktailsCategory from './cocktails-category/cocktails-category';

class Cocktails extends Component {
    constructor(props){
        super(props);

        this.state = {
            cocktailsUrl : [
                'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic',
                'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
                'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink',
                'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass',
                'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute'
              ]
        }
    }

    render() {
       return ( <div>
            {this.state.cocktailsUrl.map((url, index) => <CocktailsCategory url={url} index={index} history={this.props.history} key={index} />) }
        </div>)
    }
}

export default Cocktails;