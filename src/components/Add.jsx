import { faCloudArrowUp,faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Modal,Form,Button } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideo } from '../services/allApi';

export default function Add({setUploadVideoStatus}) {
    const [modalShow, setModalShow] = useState(false);

    const [videoDetails,setVideoDetails] = useState({
        caption:'',
        imageUrl:'',
        youtubeLink:''
    })
    
    const addVideoDetails=async()=>{
        const {caption, imageUrl,youtubeLink}=videoDetails
            if(!caption||!imageUrl||!youtubeLink){
                toast.warning("Please fill all fields")
            }
            else{
                const res=await uploadVideo(videoDetails);
                if (res.status==201){
                    setUploadVideoStatus(true)
                    toast.success(`${res.data.caption} sucessfully uploaded`)
                    setModalShow(false)
                    setVideoDetails({
                        caption:'',
                        imageUrl:'',
                        youtubeLink:''
                    })
                    
                }
                else{
                    toast.error("Please fill the form")
                }
            }
        }
    
    const getEmbededLink=(data)=>{
        const link1 = `http://www.youtube.com/embed/${data.slice(-11)}`
        const link2 = `https://img.youtube.com/vi/${data.slice(-11)}/hqdefault.jpg`
        setVideoDetails({...videoDetails,imageUrl:link2,youtubeLink:link1})
    }


    
     
    
    return (
        <div>
            <div className='d-flex align-item-center'>
                <h5 className='text-style1 pt-2'>Upload a new video</h5>
                <button className='btn' onClick={() => setModalShow(true)}><FontAwesomeIcon className='text-light fs-2' icon={faCloudArrowUp} /></button>
            </div>
            <Modal
                size="lg"
                data-bs-theme="dark"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={()=>setModalShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='text-style1' id="contained-modal-title-vcenter">
                        <FontAwesomeIcon className='text-warning' icon={faFilm} /> UPLOAD VIDEO
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='border border-secondary rounded p-3'data-bs-theme='light'>
                        <p className='text-style1'>Please fill the form</p>
                        <Form.Group className="mb-3" >
                            <Form.Control type="text" placeholder="Enter Video Caption" 
                            onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control type="text" placeholder="Enter Youtube Link"
                            onChange={(e)=>getEmbededLink(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={() => setModalShow(false)}>Cancel</Button>
                    <Button variant='warning' onClick={addVideoDetails}>Upload</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer/>
        </div>
    )
}

