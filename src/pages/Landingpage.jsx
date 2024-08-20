import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Landingpage() {
  return (
    <div>
      <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
        <Row>
          <Col>
            <h3 className='text-style1'>Welcome To <span className='text-warning'>Media Player</span></h3>
            <p className='text-style1 fs-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus magni, praesentium dolores
              reiciendis repudiandae molestias error, eos repellat cum ad tempora vero exercitationem et maxime hic asperiores beatae provident soluta!Lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus cupiditate eaque atque eos quaerat, amet ipsum tenetur nulla, fugiat
              inventore quidem error natus sed, blanditiis quasi distinctio accusantium explicabo?</p>
            <Link to='/home'>
              <button className='btn btn-warning mt-5 fw-bold'>Get Started<FontAwesomeIcon className='ms-2' icon={faArrowRight} /></button>
            </Link>
          </Col>
          <Col>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" className='ms-5 mt-5' height='400px' />
          </Col>
        </Row>
      </Container>

      <Container>
        <h3 className='text-style1'>Features</h3>
        <div className='cards d-flex align-items-center justify-content-evenly mt-4 mb-4'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body className='bg-dark'>
              <Card.Title className='text-style1'>Card Title</Card.Title>
              <Card.Text className='text-style1 text-justify'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/43/b7/e9/43b7e94dac162ec1543b0a861d012564.gif" />
            <Card.Body className='bg-dark'>
              <Card.Title className='text-style1'>Card Title</Card.Title>
              <Card.Text className='text-style1 text-justify'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body className='bg-dark'>
              <Card.Title className='text-style1'>Card Title</Card.Title>
              <Card.Text className='text-style1 text-justify'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
      <Container className='mt-5 mb-5 d-flex border border-2 border-secondary'>
        <Row className='m-4'>
          <Col>
          <h3 className='text-light'>Simple and Powerfull</h3>
          <p className='text-light text-justify'><span className='fw-bold fs-5'>Play Everything:</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quidem reiciendis non voluptatibus nihil voluptate, dolor architecto quae animi aliquam nobis reprehenderit quasi dolorum delectus est ex, facere aut temporibus!</p>
          <p className='text-light text-justify'><span className='fw-bold fs-5'>Play Everything:</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quidem reiciendis non voluptatibus nihil voluptate, dolor architecto quae animi aliquam nobis reprehenderit quasi dolorum delectus est ex, facere aut temporibus!</p>
          <p className='text-light text-justify'><span className='fw-bold fs-5'>Play Everything:</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quidem reiciendis non voluptatibus nihil voluptate, dolor architecto quae animi aliquam nobis reprehenderit quasi dolorum delectus est ex, facere aut temporibus!</p>
          </Col>
          <Col>
          <div className='mt-5'>
          <iframe width="600" height="350" src="https://www.youtube.com/embed/hOHKltAiKXQ" title="Hanumankind Big Dawgs | Ft. Kalmi (Official Music Video) | Def Jam India"></iframe>
          
          </div>
          </Col>
        </Row>


      </Container>
    </div>
  )
}
