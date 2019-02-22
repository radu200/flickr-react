
import React, { Component } from 'react';
import './scss/flickr.scss'

class Result extends Component {
    constructor(props){
        super(props)

        this.extractAuthorName = this.extractAuthorName.bind(this);
        this.extractTags = this.extractTags.bind(this)
        
    }
    extractAuthorName(authorProp) {
        // remove parentheses from author name
        const openBracketIdx = authorProp.indexOf("(");
        const closingBracketIdx = authorProp.indexOf(")");
        const authorInQuotes = authorProp.slice(openBracketIdx + 1, closingBracketIdx);
    
        return authorInQuotes.replace(/['"]+/g, '');
      }
    
      extractTags(tags){
        //add commas after each tag
        const tag = tags.split(' ').join(', ')
        return tag;
      }

         render(){
           return (
                <div className="container">
                    <div className="row">
                    {this.props.results.map((item,index) => {
                        return(
                                    <div key={index} className="card">
                                        <img  className="card-image"  alt={item.title} src={item.media.m}/>
                                    
                                        <div className="card-body">
                                            <a  className="card-title"  href={item.link}>{item.title}</a> by <a className="author-name"href={`https://www.flickr.com/people/${item.author_id}`}>{this.extractAuthorName(item.author)}</a>
                                            <p  className="card-description">{item.description.replace(/<\/?[^>]+(>|$)/g, "")} </p>
                                        </div>
                                        
                                        <div className="card-footer">
                                            <p className="card-tags">Tags: {this.extractTags(item.tags)}</p>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                    </div> 
                </div>
            )
         }
}





export default Result;