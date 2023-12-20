import React from 'react';
import Card from './components';

const Cards = () => {
    const persons = [
        {
            name: 'Romina',
            description: 'Teacher'
        },
        {
            name: 'MJ',
            description: 'Software Developer'
        },
        {
            name: 'Jose Miguel',
            description: 'Jugador de padel'
        }
    ]
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {
                persons.map((item, index) => {
                    return (
                        <Card key={`cards-${index}`} name={item.name} description={item.description} />
                    )
                })
            }
        </div>
    )
};

export default Cards;