import React, { Component } from 'react';
import './scss/search.scss'
  const SearchInput = ({onSubmit,onChange, value}) => {
    return (
      <div>
      <form onSubmit={onSubmit}>
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


export default SearchInput;