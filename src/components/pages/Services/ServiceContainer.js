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
      ? <div className="service-page__active-service" onClick={this.handleClick.bind(this)}>{this.props.children}</div>
      : <div className="service-page__normal-service" onClick={this.handleClick.bind(this)}>{this.props.children}</div>
    );
  }
}
