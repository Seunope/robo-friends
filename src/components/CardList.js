import React, {Component} from 'react';
import Card from './Card';

export default class CardList extends Component {

    render(){
        return(
            <div>
                <Card/>
                <Card/> 
                <Card/>
            </div>
        )
    }
}