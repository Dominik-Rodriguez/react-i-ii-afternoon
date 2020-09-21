import React, {Component} from 'react';
import data from '../data'

class Buttons extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            index: 0
        }
    }
    handlePrevious = this.handlePrevious.bind(this);
    handleNext = this.handleNext.bind(this);

  handlePrevious(){
      if(this.state.index === 0){
          alert("You can go past this point.")
      } else{
          this.setState({index: this.state.index - 1})
      }
  }

  handleNext(){
      if(this.state.index === data.length){
          alert("You cannot go past this point.")
      }else{
          this.setState({index: this.state.index + 1})
      }   
  }


    render(){
        console.log(this.state.index);
        return(
            <div className="ButtonContainer">
                <button className="previous" onClick={this.handlePrevious}> Previous</button>
                <button className="next" onClick={this.handleNext}>Next</button>
            </div>
        )
    }
}

export default Buttons