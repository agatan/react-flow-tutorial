// @flow
import React, {Component} from 'react';

type Props = {
  value: string | null,
  onClick: () => void,
};

type State = {};

export class Square extends Component<void, Props, State> {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
