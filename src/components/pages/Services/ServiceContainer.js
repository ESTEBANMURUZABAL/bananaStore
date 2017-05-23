import React from 'react';

export default class ServiceContainer extends React.Component {

  handleClick() {
    this.props.onClick(this.props.index);
  }
  
  componentDidMount() {
      require('./ServicesPage.scss');
  }

  render () {
    return (
      this.props.isActive
      ? <div className="active-service" onClick={this.handleClick.bind(this)}>{this.props.children}</div>
      : <div className="normal-service" onClick={this.handleClick.bind(this)}>{this.props.children}</div>
    );
  }
}
