import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Table, Button } from 'react-bootstrap'
import { loadHistory,deleteHistory} from '../services/allApi'
import { toast, ToastContainer } from 'react-toastify'

export default function Watchhistory() {
  const [viewHistory, setViewHistory] = useState([])

  const getHistory = async () => {
    const result = await loadHistory();
    const { data } = result;
    setViewHistory(data);
  }

  const deleteItemHistory= async(id)=>{
    const res=await deleteHistory(id)
    if (res.status===200){
        getHistory()
        toast.success("Sucessfully deleted")
    }
    else{
      toast.error("something went wrong")
    }
  }

  useEffect(() => {
    getHistory()
  }, [])

  return (
    <>
      <Container className='mt-5 mb-5 d-flex justify-content-between'>
        <h3 className='text-style1'>Watch History</h3>
        <Link to='/home' className='text-style1'><FontAwesomeIcon className='me-2' icon={faArrowLeft} />Back to Home</Link>
      </Container>
      <Container>
        <Table striped hover data-bs-theme='dark' size="lg">
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {
                viewHistory.length > 0 ?
                  viewHistory?.map((e) => (
                    <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.caption}</td>
                  <td>{e.url}</td>
                  <td>{e.timestamp}</td>
                  <td><Button variant="danger"><FontAwesomeIcon icon={faTrash}
                  onClick={()=>deleteItemHistory(e.id)}/></Button></td>
                  </tr>
                  )) : <p className='text-light'>No History Found</p>
                  
              }
            
          </tbody>
        </Table>
      </Container>
      <ToastContainer/>
    </>
  )
}
