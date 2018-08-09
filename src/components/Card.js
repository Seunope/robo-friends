import React, {Component} from 'react';
import 'tachyons';

export  default class Card extends Component{

    render() {
        const {id,name, email} = this.props;

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
}