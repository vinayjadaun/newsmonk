import React, { Component } from 'react'
import "./About.css"

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="about" id="about">
          <div className="container">
            <div className="heading text-center">
              <h2>About
                <span>Us</span>
              </h2>
              <p> Your Ultimate Headline Companion!"
                <br />

                "Stay informed and engaged with Newsmonk, the news app that delivers concise, personalized headlines tailored to your interests"
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <img src="https://img.freepik.com/free-vector/hand-holding-smartphones-with-online-newspaper-newsletter-weblog_74855-20591.jpg?w=826&t=st=1692800910~exp=1692801510~hmac=8f5dc01a89acbb1118a2e90b8aee62ec5b16ca7af18912896d1eaaf02cf84e53" alt="about" className="img-fluid" width="100%" />
              </div>
              <div className="col-lg-6">
                <h3>Newsmonk: Redefining News Consumption for the Modern Age</h3>
                <p>"At Newsmonk, we're committed to transforming the way you experience news. Our innovative news app is designed to provide you with curated and up-to-the-minute headlines that matter most to you. With a user-centric approach, we aim to empower you with knowledge and keep you connected to the world's events, all through a seamless and personalized news browsing experience."</p>
                <div className="row">
                  <div className="col-md-6">
                    <h4>
                      <i className="far fa-star"></i>Updated News
                    </h4>
                  </div>
                  <div className="col-md-6">
                    <h4>
                      <i className="far fa-star"></i>
                      Daily News 
                    </h4>
                  </div>
                  <div className="col-md-6">
                    <h4>
                      <i className="far fa-star"></i>Better Experince
                    </h4>
                  </div>
                  <div className="col-md-6">
                    <h4>
                      <i className="far fa-star"></i>
                      National News
                    </h4>
                  </div>
                  <div className="col-md-6">
                    <h4>
                      <i className="far fa-star"></i>International News
                    </h4>
                  </div>
                  <div className="col-md-6">
                    <h4>
                      <i className="far fa-star"></i>
                      News based on your Interest
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}
