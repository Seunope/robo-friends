import React from 'react';
import 'tachyons';

const  Card = (props) =>{

    const {id,name, email} = props;

    return(
        <div className="bg-light-green dib br3 pa3 ma2  grow shadow-1">
            <img alt="robots" src={`https://robohash.org/${id}?200x200`} width="200"/>
            <div className="tc" >
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
        
    );
    
}
export default Card