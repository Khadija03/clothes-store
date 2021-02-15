import React from 'react'
import { Card, CardDeck, Button } from "react-bootstrap"
import image1 from "./Photos/im4.jpg"
function Clothes() {
    return (
        <div>
            <div style={{marginLeft : '20%'}}>
                <CardDeck style={{ width: '80%' }}>
                    <Card >
                        <Card.Img variant="top" src={image1} />
                        <Card.Body>
                            <Card.Title>Shirt</Card.Title>
                            <Card.Text>
                                T-Shirt for all sizes available in all of our stores
                        </Card.Text>
                            <Button variant="info">Buy</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={image1} />
                        <Card.Body>
                            <Card.Title>Shirt</Card.Title>
                            <Card.Text>
                                T-Shirt for all sizes available in all of our stores
                        </Card.Text>
                            <Button variant="info">Buy</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={image1} />
                        <Card.Body>
                            <Card.Title>Shirt</Card.Title>
                            <Card.Text>
                                T-Shirt for all sizes available in all of our stores
                        </Card.Text>
                            <Button variant="info">Buy</Button>
                        </Card.Body>
                    </Card>

                </CardDeck>
            </div>
            <div style={{marginLeft : '20%'}}>
                <CardDeck style={{ width: '80%' }}>
                    <Card>
                        <Card.Img variant="top" src={image1} />
                        <Card.Body>
                            <Card.Title>Shirt</Card.Title>
                            <Card.Text>
                                T-Shirt for all sizes available in all of our stores
                        </Card.Text>
                            <Button variant="info">Buy</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={image1} />
                        <Card.Body>
                            <Card.Title>Shirt</Card.Title>
                            <Card.Text>
                                T-Shirt for all sizes available in all of our stores
                        </Card.Text>
                            <Button variant="info">Buy</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={image1} />
                        <Card.Body>
                            <Card.Title>Shirt</Card.Title>
                            <Card.Text>
                                T-Shirt for all sizes available in all of our stores
                        </Card.Text>
                            <Button variant="info">Buy</Button>
                        </Card.Body>
                    </Card>

                </CardDeck>
            </div>
        </div>
    )
}

export default Clothes
