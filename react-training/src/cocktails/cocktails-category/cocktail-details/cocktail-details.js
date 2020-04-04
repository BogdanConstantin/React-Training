
import React, { Component } from 'react';
import './cocktail-details.css';

class CocktailDetails extends Component {
    render() {
        return (
            <div>
                <h1 className="category-text">Details</h1>
                <div className="details">
                    <div className="first-half"> 
                        <button className = "undo-details" onClick={() => this.props.showDetails(null)}>Hide details</button>
                        <img className="details-image" src={this.props.strDrinkThumb}></img></div>
                    <div className="second-half"> 
                        <p className="title">{this.props.strDrink}</p>
                        <p className="title">{this.props.idDrink}</p>
                    </div>
                </div>
            </div>
            )
    }
  }

export default CocktailDetails;