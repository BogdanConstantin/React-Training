import React, { Component } from "react";
import Greet from "./Greet";

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to React Training</h1>
                {Greet('Mihaela', 'Bogdan', 'Daniel')}
            </div>
            )
    }
}

export default Welcome