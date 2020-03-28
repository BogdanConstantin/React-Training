import React from 'react';

function Greet(teacher, ...participants) {
    var allParticipants = [...participants, teacher];
        return (
            <ul>
                {allParticipants.map((participant)=> 
                    <li>Hello {participant}</li>
            )}
            </ul>
        )
}

export default Greet