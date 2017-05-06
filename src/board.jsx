// @flow
import React, {Component} from 'react';

import {Square} from './square';

type Props = {};

type State = {
  squares: Array<string | null>
};

export class Board extends Component<void, Props, State> {
  state: State;

  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClickSquare(i: number) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i: number) {
    return (
      <Square value={this.state.squares[i]} onClick={() => this.handleClickSquare(i)} />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
