import React, { Component } from "react";
import PropTypes from "prop-types";
import FrlickrCard from "./FrlickrCard";
import SearchInput from "./Search";
import "./scss/flickr.scss";
import JSONP from "jsonp";

class Flickr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.onTextChange = this.onTextChange.bind(this);
  }

  fetchData (query) {
    const url = `https://api.flickr.com/services/feeds/photos_public.gne?tags=${query}&format=json`;
    JSONP(url, { param: "jsoncallback" }, (e, res) => {
      const data = res.items;
      this.setState({ data });
    });
  }
  componentDidMount() {
     const val = 'cats'
     this.fetchData(val)
  }

  onTextChange = e => {
    // get input value
    const val = e.target.value;
    this.fetchData(val)
  };
 

  render() {
    const {value, data} = this.state 
    const { onTextChange, } = this
 
    return (
        <>
        <SearchInput value={value} onChange={onTextChange}  />
        <FrlickrCard data={data} />
       </>
    );
  }
}
Flickr.protoTypes = {
  SearchResults: PropTypes.object.isRequired
};
export default Flickr;
