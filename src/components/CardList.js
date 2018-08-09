import React, {Component} from 'react';
import Card from './Card';

export default class CardList extends Component {

    constructor(props){
        super(props);
        this.state={
            robots:""
        }
    }

    componentWillMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response =>{ return response.json()})
        .then(data => {
            this.setState({robots:  data})
            // this.getCardDetails();
         })
        .catch(err => {
            console.log("ERROR:",err)
        });
    
    }

    getCardDetails(){
        return this.state.robots.map((robot,i, array) => {
           const res = <Card key={i} id={i} name={robot.name} email={robot.email}/>
           return res;
        })
    }

    render(){
        return(
            <div className="tc">
                {this.state.robots != ""?this.getCardDetails():null}
            </div>
        )
    }
}