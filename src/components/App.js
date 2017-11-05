import React, { Component } from 'react';
// Import style dependency
import '../styles/styles.css';
// Import component dependency
import Contact from './contact';
import Contacts from './contacts';
// Import library dependency
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)    
    this.state = {
      clicked: false,
      currentContact: null,
      contacts: null
    }
    this.contactSearch = this.contactSearch.bind(this);
    this.contactClicked = this.contactClicked.bind(this);
    this.backClicked = this.backClicked.bind(this);
    this.favoriteClicked = this.favoriteClicked.bind(this);
  }
  // This method fetches the data in the setup stage
  componentDidMount(){
    this.contactSearch();
  }
  // For this retreival I chose to use the axios library to make my ajax request
  contactSearch(){
    const url = "https://s3.amazonaws.com/technical-challenge/v3/contacts.json";
    axios.get(url)
    .then((response) => {
      this.setState({contacts: response.data});
    },(error) => {
      console.log("Error retreiving the data");
    })
  }
  // This is the callback that allows the user to click on a contact and see their full description
  contactClicked(id){
    this.setState({
      currentContact: this.state.contacts.find(c => c.id === id),clicked: true
                   });
    
  }
  // This is the callback that allows the user to toggle whether someone is on their favorites list
  favoriteClicked(){
    var contacts = this.state.contacts;
    contacts.find(c => {
      if (c.id === this.state.currentContact.id) {
        c.isFavorite = !c.isFavorite;
        return true; // stop searching
      }
    });
    this.setState({contacts});
  }
  // This is the callback the takes a user from a certain contact back to the main list
  backClicked(){
    this.setState({clicked: false,
                   currentEmployee: null});
  }
  render() {       
    return (
      <div className="container">
        {this.state.clicked ? <Contact  fav={this.favoriteClicked} back={this.backClicked} contact={this.state.currentContact} /> :
                              <Contacts select={this.contactClicked} contacts={this.state.contacts}/>}
      </div>
    );
  }
}

export default App;
