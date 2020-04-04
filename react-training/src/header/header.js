import React from 'react';
import './header.css';

function Header() {
    const types = ['Alcoholic', 'Non Alcoholic', 'Ordinary Drink', 'Cocktail glass', 'Champagne flute'];

    return (
        <div>
            <header className="text-header">
                <h1>Cocktails</h1>
            </header>
            <div className="list-header">
                {types.map((cocktail, index) => <div className="cocktail-card" key={index}> {cocktail} </div>)}
            </div>
        </div>
    )
}

export default Header;