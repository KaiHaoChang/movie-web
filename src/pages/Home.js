import React, {useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {

  const [popularMovies, setPopularMovies] = useState([])
  const [recentMovies, setRecentMovies] = useState([])
  const baseUrl = 'https://image.tmdb.org/t/p/w500'



  useEffect(()=>{
    const getPopularMovieOnPlaying = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=725fb0d5c82abd1b20f9081367bda7e5&language=en-US&page=1`)
      const data = await res.json()
      setPopularMovies(data.results)
    }
    const getRecentMovieOnPlaying = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=725fb0d5c82abd1b20f9081367bda7e5&language=en-US&page=3`)
      const data = await res.json()
      setRecentMovies(data.results)
    }
    getRecentMovieOnPlaying()
    getPopularMovieOnPlaying()

  },[])

  console.log(popularMovies)
  console.log('recentMovies', recentMovies)

  return (    
    <div>
      <section className="popular-container" style={{background:'pink'}}>
        <h1>熱門電影</h1>
        <Carousel >
          {popularMovies === undefined ? 'loading': 
            popularMovies.map(movie => {
              return (
                <Carousel.Item key={movie.id} style={{opacity:'0.9'}} interval={500}>
                  <img
                    className="d-block w-100"
                    src={`${baseUrl + movie.poster_path}`}
                    alt={movie.title}
                    style={{height:'50vh', opacity:'0.8'}}
                  />
                  <Carousel.Caption  style={{justifyContent:'flex-start'}}>
                    <h3 style={{color:'white',fontWeight:'900', fontSize:'1.3rem'}}>{movie.title}</h3>
                    <p style={{color:'white',fontWeight:'900', fontSize:'1.3rem'}} >{`首映日期：${movie.release_date}`}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
      </section>
      <section className="recent-container"  style={{background:'orange'}}>
        <h1>近期上映電影</h1>
        <Carousel>
          {recentMovies === undefined ? 'loading': 
            recentMovies.map(movie => {
              return (
                <Carousel.Item key={movie.id} style={{opacity:'0.9'}} interval={1500}>
                  <img
                    className="d-block w-100"
                    src={`${baseUrl + movie.poster_path}`}
                    alt={movie.title}
                    style={{height:'50vh', opacity:'0.8'}}
                  />
                  <Carousel.Caption  style={{justifyContent:'flex-start'}}>
                    <h3 style={{color:'white',fontWeight:'900', fontSize:'1.3rem'}}>{movie.title}</h3>
                    <p style={{color:'white',fontWeight:'900', fontSize:'1.3rem'}} >{`首映日期：${movie.release_date}`}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
      </section>
    </div>
  )
}

export default Home