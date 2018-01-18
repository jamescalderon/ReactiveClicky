import React, { Component } from 'react';
import {
  Jumbotron,
  Alert,
  Grid,
  Row,
  Col,
  Image,
  Badge
} from 'react-bootstrap';

// BOARD
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [
        {
          image: "/ReactiveClicky/images/abstract-q-c-150-150-1.jpg",
          clicked: false
        },
        {
          image: "/images/abstract-q-c-150-150-2.jpg",
          clicked: false
        },
        {
          image: "/images/abstract-q-c-150-150-3.jpg",
          clicked: false
        },
        {
          image: "/images/abstract-q-c-150-150-4.jpg",
          clicked: false
        },
        {
          image: "/images/abstract-q-c-150-150-5.jpg",
          clicked: false
        },
        {
          image: "/images/abstract-q-c-150-150-6.jpg",
          clicked: false
        },
        {
          image: "/images/abstract-q-c-150-150-7.jpg",
          clicked: false
        },
        {
          image: "/images/abstract-q-c-150-150-8.jpg",
          clicked: false
        },
        {
          image: "/images/abstract-q-c-150-150-9.jpg",
          clicked: false
        },

      ]
    };
  }

  handleClick(num) {
    //function to process clicks and keep score

    if (this.state.squares[num].clicked === true) { //if already clicked
      globalObject.message = 'You guessed incorrectly - try again!';
      globalObject.message_style = 'danger';
      globalObject.score = 0;
      resetClicks(this.state.squares);

    } else { //not clicked yet
      this.state.squares[num].clicked = true;
      globalObject.message = 'You guessed correctly!';
      globalObject.message_style = 'success';
      globalObject.score += 1;

      if (globalObject.score > globalObject.top) {
        globalObject.top = globalObject.score;
      }

    }

    { this.forceUpdate() } //re-render page changes
  }

  renderSquare(num) {
    //returns tile/square image
    return (
      <Square
        bsCol={4}
        image={this.state.squares[num].image}
        onClick={() => this.handleClick(num)}
      />
    );
  }

  render() {
    //main page display calls

    shuffleArray(this.state.squares); //shuffle tiles in state before rendering

    return (
      <div>
        {/* Jumbotron */}
        <Jumbotron className="text-center">
          <h1>Reactive Clicky Game</h1>
          <Alert className="text-center" bsStyle={globalObject.message_style}>{globalObject.message}</Alert>
          <p>Current Score <Badge>{globalObject.score}</Badge> | Top Score <Badge>{globalObject.top}</Badge></p>
        </Jumbotron>

        {/* Boxes/Tiles */}
        <Grid>
          <Row className="text-center ">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </Row>
        </Grid>
      </div>
    );
  }
}
// BOARD - END

// SQUARE
class Square extends React.Component {
  //Square component
  render() {
    return (
      <Col xs={this.props.bsCol} md={this.props.bsCol} lg={this.props.bsCol}>
        <Image src={this.props.image} thumbnail onClick={() => this.props.onClick()} />
      </Col>
    );
  }
}
// SQUARE - END

//Main display
class App extends Component {
  render() {
    return (
      <div >
        <Board />
      </div>
    );
  }
}


//CUSTOM FUCNTIONS

var globalObject = {
  //Initial settings
  message: "Click on an image to earn points, but don't click on any more than once!",
  message_style: 'info',
  score: 0,
  top: 0
};

function shuffleArray(array) {
  //Fisher–Yates Shuffle: https://bost.ocks.org/mike/shuffle/
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function resetClicks(array) {

  //reset clicks to false for new round
  for (let index = 0; index < array.length; index++) {
    array[index].clicked = false;
  }
}
//CUSTOM FUCNTIONS - END
export default App;
