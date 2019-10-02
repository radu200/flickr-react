import React, { Component } from 'react';
import FrlickrCard from './FrlickrCard'
import SearchInput from './Search'
import './scss/flickr.scss'
import JSONP from 'jsonp'


class Flickr extends Component {
  constructor(props){
    super(props);
      this.state = {
        data: [],
        query:''
      }
      this.onTextChange = this.onTextChange.bind(this)

    }
  
  
    
     componentDidMount(){
       let url = `https://api.flickr.com/services/feeds/photos_public.gne?tags=cats&format=json`;       
       JSONP(url,{"param": "jsoncallback"},(e, res) => {
          const data = res.items
         this.setState({data});
         
       })
     }
    
     onTextChange = (e) => {
       // get input value
       const val = e.target.value;
       this.setState({query:val})
  
     }
     
  
      
render() {
  const res = this.state.data.filter((res) => {
    return res.tags.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1;     
  })
    return (
        <div className='container'>
            <SearchInput 
              value={this.state.value} 
              onChange={this.onTextChange} />
            <FrlickrCard data={res}/>
       </div>
    );
  }

}
export default Flickr;
