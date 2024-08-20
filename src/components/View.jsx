import React,{useEffect,useState} from 'react'
import Videocard from './Videocard'
import { viewVideo } from '../services/allApi'
import { Row ,Col} from 'react-bootstrap'

export default function View({uploadVideoStatus}) {

  const[showVideo,setShowVideo]=useState([])
  const[deleteVideoStatus,setDeleteVideoStatus]=useState(false)

const getVideoDetails=async()=>{
    const result = await viewVideo();
    const {data}=result
    setShowVideo(data);
}
useEffect(()=>{
  getVideoDetails(),
  setDeleteVideoStatus(false)
},[uploadVideoStatus,deleteVideoStatus])

  return (
    <div>
      <Row>
        {
          showVideo.length>0?
          showVideo?.map((videos)=>(
            <Col key={videos.id} sm={10} lg={4} md={6} style={{width:"20rem"}}>
              <Videocard displayData={videos} setDeleteVideoStatus={setDeleteVideoStatus}/>
            </Col>
          )):
          <p>Nothing to display</p>
        }
      </Row>
    </div>
  )
}
