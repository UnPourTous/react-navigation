import React from 'react';
import propTypes from 'prop-types';

export default class SceneView extends React.Component {
  static childContextTypes = {
    navigation: propTypes.object.isRequired,
  };
  
  static contextTypes = {
    theme: propTypes.object.isRequired 
  }

  getChildContext() {
    return {
      navigation: this.props.navigation,
    };
  }

  shouldComponentUpdate (nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
    return nextContext && this.context && nextContext.theme !== this.context.theme
  }

  render() {
    const { screenProps, navigation, component: Component } = this.props;
    return <Component screenProps={screenProps} navigation={navigation} />;
  }
}
