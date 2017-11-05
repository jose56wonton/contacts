import React, { Component } from 'react';
// Import component dependency
import AttributeListItem from './attributelistitem';
import AttributeListItemLarge from './attributelistItemlarge';
// Import library dependency
import moment from 'moment';

class AttributeList extends Component {
  render() {
    var contact = this.props.contact;
    
    // Iterate the phone sub-object
    var phones = Object.keys(contact.phone).map((p,i) => {   
      var numberparts = (contact.phone[p].split("-", 3));     
      var number = `(${numberparts[0]}) ${numberparts[1]}-${numberparts[2]}`;
      return(
        <AttributeListItem title="Phone" primary={number} secondary={p} />
      )
    })

    // Concatinate all the parts of an address
    var address = <AttributeListItem title="Address" primary={contact.address.street + contact.address.city} primarylong={contact.address.state + contact.address.country + contact.address.zipCode} />
    
    //Use the moment library to parse my dates
    var birthdayParts = (contact.birthdate.split("-", 3));
    var m = moment([birthdayParts[0], birthdayParts[1], birthdayParts[2]]);
    var birthday = <AttributeListItem title="Birthdate" primary={m.format("MMMM D, YYYY")} />

    var email = <AttributeListItem title="Email" primary={contact.emailAddress} />                                                     
    return (
      <div className="wrapper">
        <AttributeListItemLarge contact={this.props.contact} />
        <hr className="split"/>
        {phones}
        {address}
        {birthday}
        {email}
      </div>
    );
  }
}

export default AttributeList;
