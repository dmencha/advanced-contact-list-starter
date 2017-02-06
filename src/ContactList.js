import React, { Component, PropTypes } from 'react';
import Contact from './Contact';

/* eslint max-len: [1, {"ignoreUrls": true}] */
class ContactList extends Component {
  render() {
    return (
      <div>
        <ul className="contact-list">
          {this.props.contacts.map(contact => {
            return (
              <Contact
                key={contact._id}
                name={contact.name}
                avatar={contact.avatar}
                occupation={contact.occupation}
                onSelectClick={() => this.props.onSelectContact(contact)}
                onDeleteClick={() => this.props.onDeleteContact(contact._id)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}


export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onSelectContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};
