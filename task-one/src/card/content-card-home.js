import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button
} from 'react-bootstrap';

class ContentCard extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    const { name, age, distance, text, pics } = data[i];

    return (
      <animated.div
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans)
          }}
        >
          <Card style={{ maxHeight: '380px' }}>
            <Carousel>
              {pics.map((pic, index) => (
                <Card.Img src={pic} className="cardImage" key={index} alt="profilePicture" />
              ))}
            </Carousel>
            <Card.ImgOverlay style={{ position: 'relative' }} className="p-0">
              <Container style={{ position: 'absolute', bottom: '0' }} className="p-0">
                <Row className="text-white m-0">
                  <Col lg={12} md={12} sm={12} xs={12} className="p-0 text-left" style={{ textShadow: '2px 2px black' }}>
                    <h3 className="font-weight-bold m-2">{name}</h3>
                    <ul className="fa-ul">
                      <li><i className="fa-li fa fa-user fa-sm" />breeder</li>
                      <li><i className="fa-li fa fa-map fa-sm" />{distance}</li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </Card.ImgOverlay>
            <Card.Body className="p-0">
              <Col lg={12} md={12} sm={12} xs={12} className="p-0 ">
                <Container fluid>
                  <Row className="text-center text-white" >
                    <Col lg={2} md={2} sm={2} xs={2} className="p-0 bg-danger" style={{ borderRadius: '10px 0px 0px 10px' }}>Nope</Col>
                    <Col lg={8} md={8} sm={8} xs={8} className="p-0 bg-image-default">
                      <h5>
                        swipe in here
                    </h5>
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={2} className="p-0 bg-success" style={{ borderRadius: '0px 10px 10px 0px' }}>Love</Col>
                  </Row>
                </Container>
              </Col>
            </Card.Body>
          </Card>
        </animated.div>
      </animated.div>
    );
  }
}

ContentCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  distance: PropTypes.string,
  text: PropTypes.string,
  pics: PropTypes.array
};

export default ContentCard;
