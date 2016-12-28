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
                <Row className="show-grid">
                    <Col xs={4} md={2} style={{
                        borderRightWidth: '2px',
                        borderRightStyle: 'solid',
                        borderRightColor: '#e7e7e7', marginTop: '-20px',height:'100%'
                    }}> <LeftNav></LeftNav></Col>
                    <Col xs={14} md={10}> {this.props.children} </Col>
                </Row>
            </Grid>

        );
    }
}

