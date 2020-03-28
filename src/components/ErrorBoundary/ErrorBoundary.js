import Content from '../Content';
import { Title } from '../Text';
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props){
    super(props);

    this.state = { error: null };
  }

  componentDidCatch(error){
    this.setState({ error });
  }

  render() {
    return (
      <Content>
        { this.state.error ? <Title color="D33">Oopsie Doopsie!</Title> : this.props.children }
      </Content>
    );
  }
}

export default ErrorBoundary;
