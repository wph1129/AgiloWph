import React from 'react';
import Header from './Header';
import { Grid, Row, Col } from 'react-bootstrap';
import LeftNav from './LeftNav';


export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid fluid={true}>
                <Row>
                    <Col xs={12} md={12}> <Header></Header></Col>
                </Row>
                <Row>
                    <Col xs={4} md={2}> <LeftNav></LeftNav></Col>
                    <Col xs={14} md={10}> {this.props.children} </Col>
                </Row>
            </Grid>

        );
    }
}

