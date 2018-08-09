import React, {Component} from 'react';
import Card from './Card';

export default class CardList extends Component {

    constructor(props){
        super(props);
        this.state={
            robots:""
        }
    }

    getCardDetails(){
        return this.props.robots.map((robot,i, array) => {
           const res = <Card key={i} id={i} name={robot.name} email={robot.email}/>
           return res;
        })
    }

    render(){
        return(
            <div className="tc">
                {this.props.robots !== ""?this.getCardDetails():null}
            </div>
        )
    }
}