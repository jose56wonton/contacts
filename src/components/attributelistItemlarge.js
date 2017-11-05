import React, { Component } from 'react';
class AttributeListItemLarge extends Component {
  // Handles error caused by the image url being faulty
  addDefaultSrc(ev) {
    ev.target.src = require("../assets/User Small/User Icon Small.png");
  }
  render() {
    return (
      <article className="flex-container-center">
        <p className="displayblock image is-128x128">
          <img onError={this.addDefaultSrc} alt="contact portrait" src={this.props.contact.largeImageURL} />
          </p>
          <p className="displayblock">{this.props.contact.name}</p>
          <p className="displayblock">{this.props.contact.companyName}</p> 
      </article>
    );
  }
}
export default AttributeListItemLarge;
