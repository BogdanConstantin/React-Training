import React, { Component } from 'react';
import axios from 'axios';
import Cocktail from './cocktail/cocktail';
import CocktailDetails from './cocktail-details/cocktail-details';
import './cocktails-category.css';

class CocktailsCategory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cocktailsData: [],
            selectedCocktail: null,
            showDetails: false
        }
    }

    componentDidMount() {
        axios.get(this.props.url).then(res => {
            this.setState({cocktailsData: res.data.drinks});
        })
    }

    showDetails = (cocktail) => {
        this.setState({ showDetails: !this.state.showDetails });
        this.setState({ selectedCocktail: cocktail });
      }

    render() {
        return !this.state.showDetails ? (
            <div>
                <h1 className="category-text">Category {this.props.index + 1}</h1>
                <ul className="cocktails-category">
                    {
                        this.state.cocktailsData.slice(0, 5).map((cocktail, index) => 
                            <Cocktail {...cocktail} history={this.props.history} showDetails={this.showDetails} key={index}/>)
                    }
                </ul>
            </div>
        )
        : 
        (<CocktailDetails {...this.state.selectedCocktail} showDetails={this.showDetails} />)
    }
}

export default CocktailsCategory;