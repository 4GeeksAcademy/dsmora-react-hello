import React from 'react';
import Image from "./image";

export const Card = (props) => {
    console.log(props);
    const { name, description } = props;
    return (
        <div className="card" style={{ paddingRight: '20px', width: '18rem' }}>
            <Image />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
};

export default Card;

