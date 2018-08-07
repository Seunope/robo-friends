import React, {Component} from 'react';
import 'tachyons';

export  default class Card extends Component{

    // componentDidMount(){
    //     //http://jsonplaceholder.typicode.com/users
    //     //https://robohash.org/2
    //     fetch('https://robohash.org/2')
    //     .then(response => response.json())
    //     .then(data => {
    //             console.log(data);
    //             this.setState({ data })
    //             })
    //     .catch(error => { console.log('This error:',error)});

    // }


    render() {
        return(
            <div className="bg-light-green dib br3 pa3 ma2  grow shadow-1">
                <img alt="robots" src="https://robohash.org/2"/>
                <div className="tc" >
                    <h2>Xron</h2>
                    <p>mail@mail.com</p>
                </div>
            </div>
           
        );
    }
}