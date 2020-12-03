/* eslint-disable no-useless-constructor */
import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const quotes = [
  {author:'Matt Mullenweg',quote:'Technology is best when it brings people together.',color:'#5B507A'},
  {author:'Albert Einstein',quote:'It has become appallingly obvious that our technology has exceeded our humanity.',color:'#B9E28C'},
  {author:'Clive James',quote:'It is only when they go wrong that machines remind you how powerful they are.',color:'#D6D84F'},
  {author:'Tim Berners-Lee',quote:'The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.',color:'#B09398'},
  {author:'Frank Lloyd Wright',quote:'If it keeps up, man will atrophy all his limbs but the push-button finger.',color:'#0582CA'},
  {author:'Lyndon B. Johnson',quote:'If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.',color:'#F194B4'},
  {author:'Stewart Brand',quote:'Once a new technology rolls over you, if you`re not part of the steamroller, you`re part of the road.',color:'#006C67'},
  {author:'Steve Jobs',quote:'It`s not a faith in technology. It`s faith in people.',color:'#564154'},
  {author:'Christian Lous Lange',quote:'Technology is a useful servant but a dangerous master.',color:'#779FA1'},
  {author:'Bill Gates',quote:'The advance of technology is based on making it fit in so that you don`t really even notice it, so it`s part of everyday life.',color:'#384E77'}
];

const Quote = (props) => {
  return (
    <div className='inthalt'>
      <h1 id='text'>"{props.quote}</h1>
      <p id='author'>-{props.author}</p>
    </div>
  );
};
const Title = () => {
  return (
    <div className = 'Title'><h1 id='title'>Tech Quote Generator</h1></div>
  );  
};
const Designed = () => {
  return (
    <div className='Designed'>
      <p>designed by AbayNurpeissov</p>
    </div>
  );
};

class QuoteWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num:0,
      authr:quotes[0].author,
      quote:quotes[0].quote,
      bgColor:quotes[0].color
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState({
      num:Math.floor(Math.random()*quotes.length),
      authr:quotes[this.state.num].author,
      quote:quotes[this.state.num].quote,
      bgColor:quotes[this.state.num].color
    });
  }
  
  render() {
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');
    </style>
    document.body.style.backgroundColor = this.state.bgColor;
    return (
      <div>
        <Title />
        <div className='QuoteWindow' id='quote-box' style={{color:this.state.bgColor}}>
          <Quote quote={this.state.quote} author={this.state.authr}/>
          <a target='_blank' href='twitter.com/intent/tweet' id='tweet-quote'><Button variant='primary' size='lg' style={{backgroundColor:this.state.bgColor}} id='tweetquote'><img src={'https://afi6a41f39b2qbbrk28e5a2u-wpengine.netdna-ssl.com/wp-content/uploads/twitter-logo-white-png.png'} alt={''}></img></Button>{''}</a>
          <Button variant='primary' size='lg' onClick={this.handleClick} style={{backgroundColor:this.state.bgColor}} id='new-quote'>New quote</Button>{''}
        </div>
        <Designed />
      </div>
    )
  }
}


export default QuoteWindow;
