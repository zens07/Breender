import React, { Component } from 'react';
import { Col, Card } from 'react-bootstrap';

class ContentImage extends Component {
    render() {
        const { index, nameUrl, name } = this.props;
        return (
            <>
                <Col lg={4} md={4} sm={4} xs={4} className="px-1">
                    <Card.Img src={nameUrl} className="img-fit-cover-md" alt="image1" />
                    <Card.ImgOverlay className="d-flex align-items-end p-2 font-weight-bold text-white" >{name}</Card.ImgOverlay>
                </Col>
            </>
        );
    }
}
export default ContentImage;