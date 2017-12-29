import React from 'react';

import {
    Jumbotron,
    Button
} from 'react-bootstrap';

const Jumbo = () => (
     <Jumbotron className = "text-center">
    <h1>Reactive Clicky Game</h1>
    <p>Click on an image to earn points, but don't click on any more than once!</p>
    {/* <p><Button bsStyle="primary">Learn more</Button></p> */}
  </Jumbotron>
);

export default Jumbo;