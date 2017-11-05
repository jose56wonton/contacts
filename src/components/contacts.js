import React, { Component } from 'react';
// Import component dependency
import ContactList from './contactlist';
class Contacts extends Component {  
  render() {
    return (
      <div className="wrapper">
        <div className="flex-container-center">
         <h1 className="title flex-item" >Contacts</h1>
        </div>
        <ContactList select={this.props.select} contacts={this.props.contacts} fav={true} name="Favorite Contacts"/>
        <ContactList select={this.props.select} contacts={this.props.contacts} fav={false} name="Other Contacts"/>
      </div>
    );
  }
}
export default Contacts;
