import React, { Component } from 'react';
import Card from './Card';
import Controls from './Controls';
import Progress from './Progress';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Reader extends Component {
  state = {
    index: 0,
  };

  cyclicallyChangeIndex = value => {
    const { items } = this.props;
    const newIndex = this.state.index + value;

    if (newIndex < 0) {
      this.setState({ index: items.length - 1 });
    } else if (newIndex >= items.length) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: newIndex });
    }
  };

  render() {
    const currentItem = this.props.items[this.state.index];
    return (
      <div>
        <Controls cyclicallyChangeIndex={this.cyclicallyChangeIndex} />
        <Progress
          current={this.state.index + 1}
          total={this.props.items.length}
        />
        <Card title={currentItem.title} text={currentItem.text} />
      </div>
    );
  }
}
