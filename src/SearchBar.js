import React, { PropTypes } from 'react';

const SearchBar = props => {
  return (
    <div className="new-contact-form">
      <label htmlFor="search">Search:</label>
      <input
        className="search-bar"
        type="text"
        value={props.value}
        onChange={(event) => props.onChange(event)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchBar;
