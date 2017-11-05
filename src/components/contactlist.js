import React, { Component } from 'react';
// Import component dependency
import ContactListItem from './contactlistitem';
class ContactList extends Component {
  render() {
    var contacts = this.props.contacts;
    if(contacts){      
      // Sort all contact into their alphabetical order
      contacts.sort((a, b) => {
        const name1 = a.name.toLowerCase(), name2 = b.name.toLowerCase();
        if (name1 < name2) return -1;
        if (name1 > name2) return 1;
        return 0;
      })
      // Depending on the type of list add ContactListItem
      contacts = contacts.map((c,i) => {      
        return(
          this.props.fav === c.isFavorite ? <ContactListItem key={c.id} select={this.props.select} contact={c}/> : null
        )
      })
    }
    return (
      <div className="wrapper">
        <hr className="top"/>
        <h1 className="">
          <strong>{this.props.name}</strong>
        </h1>
        <hr className="bottom" />
        {contacts}       
      </div>
    );
  }
}
export default ContactList;
