import React, { Component } from 'react';
import './cocktail.css';

class Cocktail extends Component {
    render() {
      return (<div className="cocktail">
        <img class="list-image" src={this.props.strDrinkThumb} onClick={() => { this.props.history.push(`/details/${this.props.idDrink}`, {strDrink: this.props.strDrink, strDrinkThumb: this.props.strDrinkThumb }) }}></img>
        <p class="title" onClick={() => this.props.showDetails({...this.props})}>{this.props.strDrink}</p>
      </div>) 
    }
  }

  export default Cocktail;