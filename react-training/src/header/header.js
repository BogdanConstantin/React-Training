import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    const types = [
        {name:'Alcoholic', route: '/alcoholic'}, 
        {name:'Non Alcoholic', route: '/nonAlcoholic'}, 
        {name:'Ordinary Drink', route: '/ordinaryDrink'},
        {name:'Cocktail glass', route: '/cocktailGlass'},
        {name:'Champagne flute', route: '/champagneFlute'}
    ];

    return (
        <div>
            <header className="text-header">
                <h1>Cocktails</h1>
            </header>
            <div className="list-header">
                {types.map((cocktail, index) => <div className="cocktail-card" key={index}>
                     <Link to={cocktail.route}>{cocktail.name}</Link> 
            </div>)}
            </div>
        </div>
    )
}

export default Header;