// @flow
import React, {Component} from 'react';

import {Board} from './board';

type Props = {};
type State = {};

export class Game extends Component<void, Props, State> {
  state: State;

  render() {
    return (
      <Board />
    );
  }
}
