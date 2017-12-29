import React from 'react';

import {
    Grid,
    Row,
    Col,
    Clearfix

} from 'react-bootstrap';

// const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

class Square extends React.Component {
    render() {
        return (
            <button sm={4} md={4} img={this.props.image} className="img-thumbnail"></button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [
                {
                    id: 0,
                    image: "../../public/images/abstract-q-c-150-150-1.jpg",

                },
                {
                    id: 1,
                    image: "../../public/images/abstract-q-c-150-150-2.jpg",

                },
                {
                    id: 2,
                    image: "../../public/images/abstract-q-c-150-150-3.jpg",

                },
                {
                    id: 3,
                    image: "../../public/images/abstract-q-c-150-150-4.jpg",

                },
                {
                    id: 4,
                    image: "../../public/images/abstract-q-c-150-150-5.jpg",

                },
                {
                    id: 5,
                    image: "../../public/images/abstract-q-c-150-150-6.jpg",

                },
                {
                    id: 6,
                    image: "../../public/images/abstract-q-c-150-150-7.jpg",

                },
                {
                    id: 7,
                    image: "../../public/images/abstract-q-c-150-150-8.jpg",

                },
                {
                    id: 8,
                    image: "../../public/images/abstract-q-c-150-150-9.jpg",

                },

            ]
        };
    }

    renderTile(tile) {
        return (
            <Square />
        );
    }
    render() {
        return (

            <Grid className="text-center">
                <Row className="show-grid">
                    <button sm={4} md={4}></button>
                    <button sm={4} md={4}></button>
                    <button sm={4} md={4}></button>
                    {/* <Col sm={6} md={3}><code>&lt;{'Col sm={4} md={4}'} /&gt;</code><br />{dummySentences.slice(0, 6).join(' ')}</Col>
          <Col sm={6} md={3}><code>&lt;{'Col sm={4} md={4}'} /&gt;</code><br />{dummySentences.slice(0, 4).join(' ')}</Col>
          <Col sm={6} md={3}><code>&lt;{'Col sm={4} md={4}'} /&gt;</code><br />{dummySentences.slice(0, 4).join(' ')}</Col>
          <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix> */}

                </Row>
                <Row className="show-grid">
                    <button sm={4} md={4}></button>
                    <button sm={4} md={4}></button>
                    <button sm={4} md={4}></button>
                    {/* <Col sm={6} md={3}><code>&lt;{'Col sm={4} md={4}'} /&gt;</code><br />{dummySentences.slice(0, 6).join(' ')}</Col>
          <Col sm={6} md={3}><code>&lt;{'Col sm={4} md={4}'} /&gt;</code><br />{dummySentences.slice(0, 4).join(' ')}</Col>
          <Col sm={6} md={3}><code>&lt;{'Col sm={4} md={4}'} /&gt;</code><br />{dummySentences.slice(0, 4).join(' ')}</Col>
          <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix> */}

                </Row>
                <Row className="show-grid">
                    <button sm={4} md={4}></button>
                    <button sm={4} md={4}></button>
                    <button sm={4} md={4}></button>
                    {/* <Col sm={6} md={3}><code>&lt;{'Col sm={4} md={4}'} /&gt;</code><br />{dummySentences.slice(0, 6).join(' ')}</Col>
          <Col sm={6} md={3}><code>&lt;{'Col sm={4} md={4}'} /&gt;</code><br />{dummySentences.slice(0, 4).join(' ')}</Col>
          <Col sm={6} md={3}><code>&lt;{'Col sm={4} md={4}'} /&gt;</code><br />{dummySentences.slice(0, 4).join(' ')}</Col>
          <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix> */}

                </Row>
            </Grid>
        );
    }
}

// const Board = () => (



//     <Grid className="text-center">
//         <Row className="show-grid">
//             <button sm={4} md={4}></button>
//             <button sm={4} md={4}></button>
//             <button sm={4} md={4}></button>
//             {/* <Col sm={6} md={3}><code>&lt;{'Col sm={4} md={4}'} /&gt;</code><br />{dummySentences.slice(0, 6).join(' ')}</Col>
//           <Col sm={6} md={3}><code>&lt;{'Col sm={4} md={4}'} /&gt;</code><br />{dummySentences.slice(0, 4).join(' ')}</Col>
//           <Col sm={6} md={3}><code>&lt;{'Col sm={4} md={4}'} /&gt;</code><br />{dummySentences.slice(0, 4).join(' ')}</Col>
//           <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix> */}

//         </Row>
//         <Row className="show-grid">
//             <button sm={4} md={4}></button>
//             <button sm={4} md={4}></button>
//             <button sm={4} md={4}></button>
//             {/* <Col sm={6} md={3}><code>&lt;{'Col sm={4} md={4}'} /&gt;</code><br />{dummySentences.slice(0, 6).join(' ')}</Col>
//           <Col sm={6} md={3}><code>&lt;{'Col sm={4} md={4}'} /&gt;</code><br />{dummySentences.slice(0, 4).join(' ')}</Col>
//           <Col sm={6} md={3}><code>&lt;{'Col sm={4} md={4}'} /&gt;</code><br />{dummySentences.slice(0, 4).join(' ')}</Col>
//           <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix> */}

//         </Row>
//         <Row className="show-grid">
//             <button sm={4} md={4}></button>
//             <button sm={4} md={4}></button>
//             <button sm={4} md={4}></button>
//             {/* <Col sm={6} md={3}><code>&lt;{'Col sm={4} md={4}'} /&gt;</code><br />{dummySentences.slice(0, 6).join(' ')}</Col>
//           <Col sm={6} md={3}><code>&lt;{'Col sm={4} md={4}'} /&gt;</code><br />{dummySentences.slice(0, 4).join(' ')}</Col>
//           <Col sm={6} md={3}><code>&lt;{'Col sm={4} md={4}'} /&gt;</code><br />{dummySentences.slice(0, 4).join(' ')}</Col>
//           <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix> */}

//         </Row>
//     </Grid>
// );


export default Board;