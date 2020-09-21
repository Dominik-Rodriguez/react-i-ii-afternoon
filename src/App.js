import React, {Component} from 'react';
import './App.css';
import Card from './Components/Card'
// import ForwardBackButtons from './Components/ForwardBackButtons'
import data from './data'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0
    }
  }

  handlePrevious = () => {
      if(this.state.index === 0){
          alert("You can go past this point.")
      } else{
          this.setState({index: this.state.index - 1})
      }
  }

  handleNext = () => {
      if(this.state.index === data.length - 1){
          alert("You cannot go past this point.")
      }else{
          this.setState({index: this.state.index + 1})
      }   
  }

  render(){
    return (
      <div className="App">
        <header className="Header">
          <p className="Home">Home</p>
        </header>
        <Card index={this.state.index} />
        <div className="ButtonContainer">
                <button className="previous" onClick={this.handlePrevious}> Previous</button>
                <button className="next" onClick={this.handleNext}>Next</button>
            </div>
        {/* <ForwardBackButtons /> */}
    </div>
    )
  }
}

export default App;
