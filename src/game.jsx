// @flow
import React, {Component} from 'react';

import {Board} from './board';

type Props = {};
type State = {
  history: Array<{squares: Array<string | null>}>,
  xIsNext: bool,
};

export class Game extends Component<void, Props, State> {
  state: State;

  constructor() {
    super();
    this.state = {
      history: [
        { squares: Array(9).fill(null), },
      ],
      xIsNext: true,
    };
  }

  handleClickSquare(i: number) {
    const history = this.state.history.slice();
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{squares: squares}]),
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history.slice();
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status;
    if (!winner) {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    } else {
      status = 'Winner: ' + winner;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => this.handleClickSquare(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares: Array<string | null>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
