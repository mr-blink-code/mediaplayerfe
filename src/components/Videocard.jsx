import { Card, Button, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { addToHistory, deleteVideo } from '../services/allApi';
import { toast } from 'react-toastify';


export default function Videocard({ displayData, setDeleteVideoStatus}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async() => {
        const today=new Date;
        const timeStamp = new Intl.DateTimeFormat('en-US',{
            year:'numeric',
            month:'2-digit',
            day:'2-digit',
            hour:'2-digit',
            minute:'2-digit',
            second:'2-digit'
        }).format(today)
        const reqBody={
            url:displayData.youtubeLink,
            caption:displayData.caption,
            timestamp:timeStamp
        }
        await addToHistory(reqBody)
        setShow(true);
    }
    const deleteVideoItem = async(id)=>{
        const response = await deleteVideo(id)
        if(response.status===200){
            setDeleteVideoStatus(true)
            toast.success("Sucessfully deleted the video")
        }
        else{
            toast.error("something went wrong")
        }
    }

    const dragStarted=(e,id)=>{
        e.dataTransfer.setData("videoID",id)
    }

    return (

        <div>
            <Card 
            draggable='true'
            onDragStart={(e)=>dragStarted(e,displayData.id)}
            data-bs-theme='dark'
            className='mb-4'>
                <Card.Img variant="top" src={displayData?.imageUrl}
                onClick={handleShow}
                    height='250px' className='p-2 rounded-4' />
                <Card.Body className='d-flex justify-content-between'>
                    <Card.Title>{displayData?.caption}</Card.Title>
                    <Button variant="danger"><FontAwesomeIcon icon={faTrash} onClick={()=>deleteVideoItem(displayData.id)}/></Button>
                </Card.Body>
            </Card>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                centered
                data-bs-theme="dark"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title className='text-light'>{`${displayData.caption}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe width="100%" height="300px" 
                src={`${displayData.youtubeLink}`} 
                title={`${displayData.caption}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" 
                allowFullScreen></iframe>
                </Modal.Body>
               
            </Modal>
        </div>
    )
}

