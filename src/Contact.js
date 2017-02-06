import React, { PropTypes } from 'react';

/* eslint max-len: [1, {"ignoreUrls": true}] */
const Contact = props => {
  return (
    <li className="contact">
      <div className="image-cropper">
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className="contact-info">
        <h2>{props.name}</h2>
        {props.occupation}
      </div>
      <button className="contactbuttons"
        onClick={props.onSelectClick}> select
      </button>
      <button
        className="deleteSpan contactbuttons"
        onClick={props.onDeleteClick}> delete
        </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onSelectClick: PropTypes.func.isRequired
};

export default Contact;
