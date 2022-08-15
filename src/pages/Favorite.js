import React, {useState, useEffect} from 'react'
import CardsGroup from '../components/CardsGroup'

const Favorite = () => {

  const [movies, setMovies] = useState([])
  const [refresh, setRefresh] = useState(false);

  useEffect(()=>{
    setMovies(JSON.parse(localStorage.getItem('favorite_movies')))
  },[refresh])
  console.log(movies)


  return (
    <div>
      {movies.length === 0 ? <h1>您還沒有加入最愛</h1> : <CardsGroup movies={movies} favoriteModal={true} refresh={refresh} setRefresh={setRefresh} />}
    </div>
  )
}

export default Favorite