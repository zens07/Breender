import React, {Component} from 'react';
import {Col, Container, Row, Button} from 'react-bootstrap';
import '../App.css';

class Navigation extends Component{
    render(){
        return(
            <Container>
                <Row className="p-5">
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <h1 className="size-lg-responsive">Breender</h1>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} className="text-right">
                        <Button className="float-right"variant="outline-info" onClick={this.props.popupLogin}>Login</Button>
                    </Col>
                </Row>
            </Container>
            
        );
    }
}
export default Navigation;