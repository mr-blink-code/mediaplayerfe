import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal, Form } from 'react-bootstrap';
import { faList, faTrash } from '@fortawesome/free-solid-svg-icons';
import { addToCategory, deleteCategory, fetchCategory, getVideobyId, updateCategoryById } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Videocard from './Videocard';

export default function Category({setContentHeader}) {
    const [modalShow, setModalShow] = useState(false);
    const [showCategory, setShowCategory] = useState();
    const [updateCategory, setUpdateCategory] = useState(false);

    const handleDeleteCategory = async (id) => {
        const response = await deleteCategory(id)
        if (response.status === 200) {
            setUpdateCategory(true)
            toast.success("Deleted Successfully")
        }
        else {
            toast.error("error in deletion")
        }
    }
    const videoDrop = async (e, id) => {
        const videoid = e.dataTransfer.getData("videoID")
        const response = await getVideobyId(videoid)
        const { data } = response
        console.log(data)
        const selectedCategory = showCategory?.find(item => item.id === id)
        selectedCategory.allVideos.push(data)
        const update = await updateCategoryById(id, selectedCategory)
    }
    const dragOver = (e) => {
        e.preventDefault();
        console.log("drag over")

    }


    return (
        <div>
            <button className='btn btn-warning' onClick={() => setModalShow(true)}>Add New Category</button>
            <button
            onClick={()=>setContentHeader("All Videos")}
            className='btn btn-light mt-3 w-75'>
                All Videos
            </button>
            {
                showCategory?.length > 0 ?
                    showCategory.map((item) => (
                        <button
                            key={item.id}
                            className='btn btn-light mt-3 w-75'
                            droppable='true'
                            onDragOver={(e) => dragOver(e)}
                            onDrop={(e) => videoDrop(e, item.id)}
                        >
                            <div className='d-flex justify-content-between align-item-center'>
                                {item.categoryName}
                                <Button 
                                onClick={() =>{ handleDeleteCategory(item.id)
                                    setContentHeader(item.categoryName)
                                }
                                }>
                                    <FontAwesomeIcon icon={faTrash}/>
                                    </Button>
                            </div>
                           {
                            
                                item.allVideos?.length > 0 ?
                                    item.allVideos?.map((card) => {
                                        <Videocard/>
                                    }
                                    ) : <p>No found</p>
                            
                           } 
                        </button>
                         )) : <p>No categories found</p>

            }
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                setShowCategory={setShowCategory}
                showCategory={showCategory}
                updateCategory={updateCategory}
                stUpdateCategory={setUpdateCategory}
            />
            <ToastContainer />
        </div>
    );
}



function MyVerticallyCenteredModal(props) {
    const [category, setCategeory] = useState({
        category: ''
    });
    const addCategory = async () => {
        if (!category) {
            toast.error("please fill form completly")
        }
        else if (props.showCategory.some(e => e.categoryName === category)) {
            toast.error("duplicate")
        }
        else {
            let body = {
                categoryName: category,
                allVideos: []
            }
            const response = await addToCategory(body)
            if (response.status === 201) {
                toast.success(`${category} successfully inserted`)
                props.onHide()
                props.stUpdateCategory(true)
                setCategeory('')
            }
            else {
                toast.error("something  went wrong")
            }
        }
    }
    const getCategory = async () => {
        const response = await fetchCategory();
        const { data } = response;
        props.setShowCategory(data)

    }

    useEffect(() => {
        getCategory();
        props.stUpdateCategory(false);
    }, [props.updateCategory])
    return (
        <Modal
            {...props}
            size="lg"
            data-bs-theme="dark"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            modal="true"
        >
            <Modal.Header closeButton>
                <Modal.Title className='text-style1' id="contained-modal-title-vcenter">
                    <FontAwesomeIcon className='text-warning' icon={faList} /> ADD CATEGORY
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='border border-secondary rounded p-3' data-bs-theme='light'>
                    <p className='text-style1'>Please fill the form</p>
                    <Form.Group className="mb-3"  >
                        <Form.Control type="text" placeholder="Enter Category Name"
                            onChange={(e) => setCategeory(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault()
                                    addCategory()
                                }
                            }} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={props.onHide}>Cancel</Button>
                <Button variant='warning' onClick={addCategory}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
}

