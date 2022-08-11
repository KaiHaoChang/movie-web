import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Cards = ({movie}) => {
  // 這是設定Modal顯示的開關
  const [show, setShow] = useState(false);

  // 這是movie的資料
  const {title, overview, poster_path, release_date, vote_average} = movie


  // 這是設定Modal顯示的開關
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // baseUrl
  const baseUrl = 'https://image.tmdb.org/t/p/w500'

  return (
    <Card className='mx-auto p-2' style={{width:'18rem'}} >
      <Card.Img variant="top" src={`${baseUrl + poster_path}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Realease Date: {release_date}</Card.Text>
        <Card.Text>Average Rating: {vote_average}</Card.Text>
        <Button onClick={handleShow} variant="primary">See More...</Button>
      </Card.Body>


{/* 這是MODAL */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Card.Img src={`${baseUrl + poster_path}`} />
        <Modal.Body>{overview}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
    </Card>
  )
}

export default Cards