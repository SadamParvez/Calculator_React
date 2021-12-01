import { Component } from "react";
import {evaluate} from "mathjs";

export default class App extends Component{

  state = {
    expression:""
  };

  handleClick = (event) => {
    // this.setState({expression:this.state.expression + event.target.innerText})
    let value = event.target.innerText;
    let currentexpression = this.state.expression;
    let lastchar  = currentexpression [currentexpression.length-1];

    if (["+","-","/","*"].includes(lastchar) && ["+","-","/","*"].includes(value)){
      return;
    }
    this.setState({
     expression: currentexpression+value
    });
  }

  handleClear = () => {
    this.setState({expression : ""})
  }

  handleevaluate = () => {
    this.setState({expression : evaluate(this.state.expression) || ""})
  }

  render(){
    return(
      <div>
        <div>
          <input value={this.state.expression} type= "text" disabled />
        </div>
        <div>
          <button onClick = {this.handleClick}>1</button>
          <button onClick = {this.handleClick}>2</button>
          <button onClick = {this.handleClick}>3</button> <br />
          <button onClick = {this.handleClick}>4</button>
          <button onClick = {this.handleClick}>5</button>
          <button onClick = {this.handleClick}>6</button> <br />
          <button onClick = {this.handleClick}>7</button>
          <button onClick = {this.handleClick}>8</button>
          <button onClick = {this.handleClick}>9</button><br />
          <button onClick = {this.handleClick}>0</button>
          <button onClick = {this.handleClick}>+</button>
          <button onClick = {this.handleClick}>-</button> <br />
          <button onClick = {this.handleClick}>*</button>
          <button onClick = {this.handleClick}>/</button>
          <button onClick = {this.handleClear}>Cle</button> <br/>
          <button onClick = {this.handleevaluate}>=</button>
      </div>
      </div>
    )
  }
}