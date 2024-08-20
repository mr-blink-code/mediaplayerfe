import React, { useEffect, useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Category from '../components/Category'

function Home() {
  const [uploadVideoStatus,setUploadVideoStatus]=useState(false)
  const [contentHeader,setContentHeader]=useState("All Videos")
  console.log(contentHeader)


  return (
    <>
      <Container className='mt-5 mb-5 d-flex justify-content-between align-items-center'>
        <div className='add_video'>
          <Add setUploadVideoStatus={setUploadVideoStatus}/>
        </div>
        <Link to='/watch' className='text-style1 fs-4'>WATCH HISTORY</Link>
        </Container>

        <Container className='d-flex justify-content-evenly'>
          <div className='all-videos'>
            <h4 className='text-style1'>{contentHeader}</h4>
            <View uploadVideoStatus={uploadVideoStatus}/>
          </div>
          <div className='category'>
            <Category setContentHeader={setContentHeader}/>
          </div>
        </Container>
      
    </>
  )
}

export default Home