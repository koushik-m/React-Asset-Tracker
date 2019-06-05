import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  render() {
    const { title } = this.props;

    return <h4>{title}</h4>;
  }
}

Header.propTypes = {
  title: PropTypes.string,
};
