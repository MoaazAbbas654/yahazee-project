import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    diceNum : ['one', 'two', 'three', 'four', 'five', 'six']
  }
  render() {
    const {diceNum, val, handleClick, idx, disabled, locked, rolling} = this.props
    const numDice = diceNum[val -1]
    let classes = `Die fas fa-dice-${numDice} fa-5x `
    if(locked) classes += 'Die-locked';
    if(rolling) classes += 'Die-rolling';
    return (
      <i
        className={classes}
        onClick={()=>handleClick(idx)}
        disabled={disabled}
      >
      </i>
    );
  }
}

export default Die;
