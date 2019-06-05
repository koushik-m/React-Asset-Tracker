/* eslint-disable no-unused-vars */
import React from 'react';
import './styles.css';
import Image from '../Image/index';
import Header from '../Header/index';
import Button from '../Button/index';
import Label from '../Label/index';

export default class Card extends React.Component {
  render() {
    const { headerprop, imgsrc, company, os, typeofuser, page } = this.props;
    let button1, button2, button3;
    if (page === 'home' && typeofuser === 'admin') {
      button1 = 'Approve';
      button2 = 'Decline';
      button3 = '';
    } else if (page === 'devices' && typeofuser === 'admin') {
      button1 = 'Details';
      button2 = 'Edit';
      button3 = 'Delete';
    } else if (page === 'home' && typeofuser === 'user') {
      button1 = 'Status';
      button2 = 'Cancel';
      button3 = '';
    } else if (page === 'devices' && typeofuser === 'user') {
      button1 = 'Request';
      button2 = 'Instant Request';
      button3 = '';
    }

    return (
      <div className="card">
        <div className="image">
          {' '}
          <Image source={imgsrc} />
        </div>

        <Header headerprop={headerprop} />
        <Label labelprop={company} />
        <Label labelprop={os} />
        <div>
          <Button btnprop="btn btn-dark">{button1}</Button>
          <Button btnprop="btn btn-dark">{button2}</Button>
          {button3 ? <Button btnprop="btn btn-dark">{button3}</Button> : ''}
        </div>

        <PageLayout title="Devices">
          <button />
        </PageLayout>
      </div>
    );
  }
}

// Service ===> Store ==> Component
