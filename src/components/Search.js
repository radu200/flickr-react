import React, { Component } from 'react';
import './scss/search.scss'
import FrlickrCard from './FrlickrCard'


class Search extends Component {
  constructor(props){
    super(props)
    
    this.onTextChange = this.onTextChange.bind(this)
  
   
    this.state = {
      query: '',
  
    };
 }

  onTextChange = (e) => {
    // get input value
    const val = e.target.value;
    this.setState({query:val})
  }
  
  render() {
    let SearchResults = this.props.data.filter((res) => {
        return res.tags.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1;     
    })

    return (
      <div>
        <input
          value={this.state.query}
          onChange={this.onTextChange}
          className="search-input"
          placeholder="Search by title"
          />
         <FrlickrCard results={SearchResults}/>
        
      </div>
    );
  }
}

export default Search;