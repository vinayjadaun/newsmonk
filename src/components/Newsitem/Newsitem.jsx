import React, { Component } from 'react'
import "./Newsitem.css"

export class Newsitem extends Component {
  render() {
    let {title , description, imgUrl, newsUrl }= this.props;
    return (
      
        <div className="card" >
          <img src={!imgUrl?"https://media.istockphoto.com/id/1264074047/vector/breaking-news-background.jpg?s=612x612&w=0&k=20&c=C5BryvaM-X1IiQtdyswR3HskyIZCqvNRojrCRLoTN0Q=":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a href={newsUrl} target ="_blank" className="cardbtn">Read more</a>
            </div>
        </div>
        
   
    )
  }
}

export default Newsitem
