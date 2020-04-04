import React, { Component } from 'react';
import './view-cocktail.css';

class ViewCocktail extends Component {
    constructor(props) {
      super(props)
      
      this.state = {
        strDrink : props.location.state.strDrink,
        strDrinkThumb : props.location.state.strDrinkThumb,
    }
}
  
    render() {
        return (
            <div>
                <div className="details-page">
                    <p className="title">{this.state.strDrink}</p>
                    <img className= "details-page-image" src={this.state.strDrinkThumb} ></img>
                </div>
                <button className = "undo" onClick={() => { this.props.history.push('/') }}>Back</button>
            </div>
        ) 
    }
  }

  export default ViewCocktail;