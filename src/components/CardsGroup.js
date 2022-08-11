import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';

const CardsGroup = ({movies, favoriteModal, refresh, setRefresh}) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500'

  
  // 這是設定Modal顯示的開關
  const [show, setShow] = useState(false);
  // 這是設定Modal顯示的開關
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [movie, setMovie] = useState({});
  const [data, setData] = useState([]);

  
  useEffect(()=>{
    const getFavorite = JSON.parse(localStorage.getItem('favorite_movies'))
    if (data === null) {
      return setData([])
    } else {
      setData(getFavorite)
    }
    console.log(data)
  },[refresh])



  // 加入最愛
  const addFavorite = (movie) => {

    if (data.find(item => item.id === movie.id)) {
      return alert('這個已經加入最愛了')
    } else {
      data.push(movie)    
      console.log(data)
      localStorage.setItem('favorite_movies', JSON.stringify(data))
    }
    handleClose()
  }

  const removeFavorite = (movie) => {
    const newData = data.filter(item => item.id !== movie.id)
    localStorage.setItem('favorite_movies', JSON.stringify(newData))
    setRefresh(!refresh)
    handleClose()
  }
  console.log(movies)

  return (
    <Row xs={1} sm={2} md={4} lg={6} className="m-2 g-4">
      {movies.map(item => (
        <Col key={item.id}>
          <Card onClick={()=>{
            setMovie(item)
            return handleShow()
          }}>
            <Card.Img variant="top" src={`${baseUrl + item.poster_path}`} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>Release Date: {item.release_date}</Card.Text>
              <Card.Text>Score: {item.vote_average}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      {/* 這是MODAL */}
      {favoriteModal ? 
        //如果是最愛的話回傳的Modal
        <Modal size="none"  show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='display-6'>{movie.title}</Modal.Title>
          </Modal.Header>
          <Card.Img src={`${baseUrl + movie.poster_path}`} />
          <Modal.Title className='mb-0 p-2 display-10'>Description:</Modal.Title>
          <Modal.Body >{movie.overview}</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={()=>removeFavorite(movie)}>
              從最愛中移除
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>      
      : //如果不是最愛的話回傳的Modal
        <Modal size="none"  show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='display-6'>{movie.title}</Modal.Title>
          </Modal.Header>
          <Card.Img src={`${baseUrl + movie.poster_path}`} />
          <Modal.Title className='mb-0 p-2 display-10'>Description:</Modal.Title>
          <Modal.Body >{movie.overview}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={()=>addFavorite(movie)}>
              加到最愛
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
     }
    </Row>
  )
}

export default CardsGroup