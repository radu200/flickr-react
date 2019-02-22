import React, { Component } from 'react';

import JSONP from 'jsonp'
import Search from './Search'


class Flickr extends Component {
  constructor(props){
    super(props);
      this.state = {
        data: []
      }
    }

  
    
     componentDidMount(){
       let url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags="kitten"&format=json';       
       JSONP(url,{"param": "jsoncallback"},(e, res) => {
          const data = res.items
         this.setState({data});
        //  console.log(data)
         
       })
     }
    
   


  render() {
    return (
        <div >
            <Search data={this.state.data}/>
       </div>
    );
  }

}
export default Flickr;
