import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';

const Favorite = () => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500'
  const [show, setShow] = useState(false);
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState({})
  const [data, setData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(()=>{
    const getFavorite = () => {
      const favorite = JSON.parse(localStorage.getItem('favorite_movies'))
      console.log(favorite)
      setMovies(favorite)
      return
    }
    getFavorite()
  },[refresh])

// 刪除最愛
  const removeFavorite = (movie) => {
    const newData = data.filter(item => item.id !== movie.id)
    localStorage.setItem('favorite_movies', JSON.stringify(newData))
    setRefresh(!refresh)
    handleClose()
  }


  return (
    <div>
      {/* {movies.length ? <h1>您還沒有加入最愛的電影</h1> :  */}
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
            {/* //最愛的話回傳的Modal */}
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
        </Row>
      {/* }    */}
    </div>
  )
}

export default Favorite