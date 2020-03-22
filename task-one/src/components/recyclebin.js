<Card className="mx-auto" style={{ maxHeight: '100vh', maxWidth: '50vh' }}>
    <Carousel>
        {pics.map((pic, index) => (
            <img src={pic} key={index} className="imageCard" alt="profilePicture" />
        ))}
    </Carousel>
    <Card.Img src="assets/images-content/1.jpg" style={{ objectFit: 'cover', height: '75vh', width: 'auto' }} />
    <Card.ImgOverlay style={{ position: 'relative' }} className="p-0">
        <Container style={{ position: 'absolute', bottom: '0' }} className="p-0">
            <Row className="text-white m-0">
                <Col lg={12} md={12} sm={12} xs={12} className="p-0 text-left" style={{ textShadow: '2px 2px black' }}>
                    <h3 className="font-weight-bold m-2">Garry</h3>
                    <ul className="fa-ul">
                        <li><i className="fa-li fa fa-user fa-sm" />breeder-zezen</li>
                        <li><i className="fa-li fa fa-map fa-sm" />10 km dari sini</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </Card.ImgOverlay>
    <Card.Body className="align-items-center d-flex justify-content-center p-0">
        <Col lg={12} md={12} sm={12} xs={12} className="p-0 ">
            <Container fluid>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12} className="p-0">
                        <Button className="btn-light btn-sm rounded-circle custom-shadow m-2">
                            <span>
                                <Image src="assets/images-content/icon-refresh.png" className="img-icon" />
                            </span>
                        </Button>
                        <Button className="btn-light btn-sm rounded-circle custom-shadow m-2">
                            <span>
                                <Image src="assets/images-content/icon-delete.png" className="img-icon" />
                            </span>
                        </Button>
                        <Button className="btn-light btn-sm rounded-circle custom-shadow m-2">
                            <span>
                                <Image src="assets/images-content/icon-love.png" className="img-icon" />
                            </span>
                        </Button>
                        <Button className="btn-light btn-sm rounded-circle custom-shadow m-2">
                            <span>
                                <Image src="assets/images-content/icon-petir.png" className="img-icon" />
                            </span>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Col>
    </Card.Body>
</Card>