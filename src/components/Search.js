import React from "react";
import PropTypes from "prop-types";
import "./scss/search.scss";

const SearchInput = ({ onChange, value }) => {
  return (
    <>  
      <form className="search-container"> 
        <input
          value={value}
          onChange={onChange}
          className="search-input"
          placeholder="Search"
          required
        />
        <button  className="search-btn" type='submit'>Search</button>
      </form>
    </>
  );
};

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default SearchInput;
