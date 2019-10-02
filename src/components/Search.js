import React  from 'react';
import PropTypes from 'prop-types';
import './scss/search.scss'
  
const SearchInput = ({onChange, value}) => {
    return (
      <div>
      <form >
        <input
           value={value}
           onChange={onChange}
           className="search-input"
           placeholder="Search"
          />
        </form>
      </div>
    );
  }

  SearchInput.propTypes = {
    onChange:PropTypes.func.isRequired,
    value:PropTypes.string
  }

export default SearchInput;