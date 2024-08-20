import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faVideo} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div><Navbar className="bg-dark">
    <Container>
      
      <Navbar.Brand>
      <Link to='/'className='text-style1' >
      <FontAwesomeIcon className="text-warning" icon={faVideo}/>
        {' '}
        Media Player
        </Link>
      </Navbar.Brand>
      
    </Container>
  </Navbar></div>
  )
}
