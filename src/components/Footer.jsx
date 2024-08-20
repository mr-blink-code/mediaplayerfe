import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faVideo} from '@fortawesome/free-solid-svg-icons';
import {faInstagram,faFacebook, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center' >
      <div className='footer d-flex align-items-center justify-content-evenly'>
        <div style={{width:'400px'}}className='ms-2'>
          <h5 className='text-style1'><FontAwesomeIcon className='text-warning' icon={faVideo}/> Media Player</h5>
          <p className='text-justify text-style1'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, eveniet aut! Officia, dolorem. Impedit obcaecati libero quo? Animi eius autem, unde cupiditate vero excepturi quod voluptates earum, voluptatibus illo eligendi.
          </p>
        </div>
        <div className='d-flex flex-column ms-3 text-style1'>
          <h4>Links</h4>
          <Link className='text-style1' to='/'>Landing Page</Link>
          <Link className='text-style1' to='/home'>Home Page</Link>
          <Link className='text-style1' to='/watch'>Watch History</Link>
        </div>
        <div className='d-flex flex-column ms-3 text-style1'><h4>Guides</h4>
          <Link className='text-style1' target='_blank' to='https://react.dev/'>React</Link>
          <Link className='text-style1' target='_blank' to='https://react-bootstrap.netlify.app/'>React Bootstrap</Link>
          <Link className='text-style1' target='_blank' to='https://www.npmjs.com/package/json-server'>Json Server</Link>
        </div>
        <div className='text-style1 ms-4 me-2'>
          <h4>Contact US</h4>
        <div className='d-flex'>
             <input type="text" className='form-control' placeholder='Enter your emailid' />       
             <button className='btn btn-warning ms-2'>SUSCRIBE</button>
        </div>
        <div className='m-2'>
             <Link className='text-style1 fs-1'><FontAwesomeIcon icon={faInstagram} /></Link>
             <Link className='text-style1 fs-1 ms-2'><FontAwesomeIcon icon={faFacebook} /></Link>
             <Link className='text-style1 fs-1 ms-2'><FontAwesomeIcon icon={faLinkedin} /></Link>
             <Link className='text-style1 fs-1 ms-2
             '><FontAwesomeIcon icon={faTwitter} /></Link>
        </div>
        </div>
      </div>
    </div>
  )
}
