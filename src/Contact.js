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
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired
};

export default Contact;
