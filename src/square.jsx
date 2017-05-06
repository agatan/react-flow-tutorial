// @flow
import React, {Component} from 'react';

type Props = {};

type State = {
  value: string | null
};

export class Square extends Component<void, Props, State> {
  state: State;

  constructor() {
    super();
    this.state = { value: null };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: 'X' })}>
        {this.state.value}
      </button>
    );
  }
}
