import React from "react";
import PropTypes from "prop-types";
import "./scss/search.scss";

const SearchInput = ({ onChange, value}) => {
  return (  
      <div className="search-container"> 
        <input
          value={value}
          onChange={onChange}
          className="search-input"
          placeholder="Search"
          required
        />
      </div>

  );
};

SearchInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default SearchInput;
