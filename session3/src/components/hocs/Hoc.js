import React, { Component } from 'react';

export default function Hoc(HocComponent) {
    return class extends Component {
        render() {
            return (
                <div>
                    <h2>
                        This is my Hoc
                    </h2>
                    <HocComponent></HocComponent>
                </div>
            )
        }
    }
}