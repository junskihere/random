import React from 'react';


class Home extends React.Component {
  componentDidMount(){
     $('.parallax').parallax();
  }
  render() {
    return (
      <div>
      <div className="parallax-container" style={{height:"150px"}}>
        <div className="parallax"><img src="/img/cloud-home.jpg" /></div>

      </div>
      <div className="section white">
        <div className="row container">
          <h2 className="header">Junskis Mantra</h2>
          <p className="grey-text text-darken-3 lighten-3">Welcome to justskis mantra where all the mantra is..<a href="/posts">start browsing matras</a> .</p>
        </div>
      </div>
        <div className="parallax-container"  style={{height:"900px"}}>
          <div className="parallax"><img src="/img/bg_6.jpg" / ></div>
        </div>
        </div>
    );
  }
}

export default Home;
