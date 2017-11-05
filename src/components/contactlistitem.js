import React, { Component } from 'react';
class ContactListItem extends Component {
  // Handle faulty image url
  addDefaultSrc(ev) {
    ev.target.src = require("../assets/User Small/User Icon Small.png");
  }
  render() {
    return (
      <article className="media" onClick={() => { this.props.select(this.props.contact.id) }} >
        <figure className="media-left">
          <p className="image is-64x64">
            <img alt="contact portrait"  onError={this.addDefaultSrc} src={ this.props.contact.largeImageURL} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content flex-container">
            <p className="flex-item image is-16x16 ">
              <img alt=" " src={this.props.contact.isFavorite ? require('../assets/Favorite Star (True)/Favorite — True.png') : " "} />
            </p>       
            <p className="flex-item ">
              <strong>{this.props.contact.name}</strong>
              <br />
              {this.props.contact.companyName}
            </p>
          </div>
        </div>
      </article>
    );
  }
}
export default ContactListItem;
