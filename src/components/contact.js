import React, { Component } from 'react';
// Import component dependency
import AttributeList from './attributelist';
class Contact extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="flex-container">
          <h1 className="my-title left flex-item" onClick={() => { this.props.back() }} >&lt;Contacts</h1>
          <p className="my-title flex-item right image is-24x24" onClick={() => { this.props.fav() }}>
            <img alt="contact portrait"  src={this.props.contact.isFavorite ? require('../assets/Favorite Star (True)/Favorite — True.png') : require('../assets/Favorite Star (False)/Favorite — False.png')} />
          </p>
        </div>
        <hr className="top" />
        <AttributeList contact={this.props.contact} />
      </div>
      
    );
  }
}
export default Contact;
