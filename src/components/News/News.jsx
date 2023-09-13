import React, { Component } from 'react'
import Newsitem from '../Newsitem/Newsitem'
import "./News.css"
import PropTypes from 'prop-types'

  



export class News extends Component {
  static defaultProps = {
 country :'in',
 pageSize: 10,
 category: 'general'
 
  }
  static propTypes = {
    country :PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
    }
    capitalizeFLetter = (string)=> {
      return string.charAt(0).toUpperCase()+string.slice(1)
  }
  

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1

    }
    document.title =`${this.capitalizeFLetter(this.props.category)} - Newsmonk` ;
  }
  async componentDidMount() {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=a71fc1ac0dc64dddbca9d3aa58e6573b&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData)
    this.setState({ articles: parseData.articles,totalResults:parseData.totalResults })
  }
   handlePrevCLick = async() =>{
    console.log("pre")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=a71fc1ac0dc64dddbca9d3aa58e6573b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles:parseData.articles 
    })
    
  }
  handleNextCLick = async() =>{
    console.log("next")
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=a71fc1ac0dc64dddbca9d3aa58e6573b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    
    
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles 
    })
  }
  }

  render() {
    return (

      <div className='container'>
        <h2>Newsmonk - Top  {this.capitalizeFLetter(this.props.category)} Headlines</h2>
    
           
         
        <div className="newsboxcontainer">
               

          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col" key={element.url}>
                <Newsitem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""} imgUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}
          </div>
        </div>
        <div className="buttoncontainer">
          <button disabled={this.state.page<=1} className="pagebtn btn-primary me-md-2" onClick={this.handlePrevCLick}>＜ </button>
          <button className="pagebtn btn-primary"  onClick={this.handleNextCLick}> ＞ </button>
        </div>
      </div>
    )
  }
}

export default News
