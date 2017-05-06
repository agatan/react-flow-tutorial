// @flow
import React, {Component} from 'react';

import {Board} from './board';

type Props = {};
type State = {};

export class Game extends Component<void, Props, State> {
  state: State;

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}
