import React, {Component} from 'react';
import data from '../data'

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            index: this.props.index
        }
        
    }

    render(){
        return(
        <body className="Card">
            <div className="top">
                
                <h1 className="cardName">{data[this.props.index].name.first} {data[this.props.index].name.last}</h1>
                <h1 className="numbers">{data[this.props.index].id}/{data.length}</h1>
            </div>
            <div className="cardInfo">
                <div className="from">
                    <h3>From: </h3><p> {data[this.props.index].city}, {data[this.props.index].country}</p>
                </div>
                <div className="jobTitle">
                    <h3>Job Title: </h3> <p> {data[this.props.index].title}</p>
                </div>
                <div className="Employeer">
                    <h3>Employeer: </h3> <p>{data[this.props.index].employer}</p>
                </div>
                <div className="favMovies">
                    <h3>Favorite Movies: </h3>
                   <ol>
                    <li>{data[this.props.index].favoriteMovies[0]}</li>
                    <li>{data[this.props.index].favoriteMovies[1]}</li>
                    <li>{data[this.props.index].favoriteMovies[2]}</li>
                </ol> 
                </div>
            </div>
        </body>
        )
    }
}

export default Card;