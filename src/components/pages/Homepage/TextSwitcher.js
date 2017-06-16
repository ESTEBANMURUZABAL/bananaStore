import React from 'react';

export default class TextSwitcher extends React.Component {
  componentDidMount() {
      // Component styles
      require('./Homepage.scss');
  }

  render() {
    return (
      <div className="switcher-container">
        {this.props.name}
      </div>
    );
  }
}

TextSwitcher.propTypes = {
  name: React.PropTypes.string.isRequired,
};
