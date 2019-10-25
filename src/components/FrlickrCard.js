import React, { Component } from "react";
import PropTypes from "prop-types";

class FlickrCard extends Component {
  constructor(props) {
    super(props);

    this.extractAuthorName = this.extractAuthorName.bind(this);
    this.extractTags = this.extractTags.bind(this);
  }
  extractAuthorName(authorProp) {
    // remove parentheses from author name
    const openBracketIdx = authorProp.indexOf("(");
    const closingBracketIdx = authorProp.indexOf(")");
    const authorInQuotes = authorProp.slice(
      openBracketIdx + 1,
      closingBracketIdx
    );

    return authorInQuotes.replace(/['"]+/g, "");
  }

  extractTags(tags) {
    //add commas after each tag
    const tag = tags.split(" ").join(", ");
    return tag;
  }

  render() {
    return (
      <div className="row">
        {this.props.data.map((item, index) => {
          return (
            <div key={index} className="card">
              <img className="card-image" alt={item.title} src={item.media.m} />

              <div className="card-body">
                <a className="card-title" href={item.link}>
                  {item.title}
                </a>{" "}
                by{" "}
                <a
                  className="author-name"
                  href={`https://www.flickr.com/people/${item.author_id}`}
                >
                  {this.extractAuthorName(item.author)}
                </a>
                <p className="card-description">
                  {item.description.replace(/<\/?[^>]+(>|$)/g, "")}{" "}
                </p>
              </div>

              <div className="card-footer">
                <p className="card-tags">Tags: {this.extractTags(item.tags)}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

FlickrCard.protoTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      media: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired
    })
  )
};

export default FlickrCard;
