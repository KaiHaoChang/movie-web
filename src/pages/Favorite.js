import React, {useState, useEffect} from 'react'
import CardsGroup from '../components/CardsGroup'

const Favorite = () => {

  const [favoriteMovies, setFavoriteMovies] = useState([])
  const [refresh, setRefresh] = useState(false);

  useEffect(()=>{
    const getFavorite = JSON.parse(localStorage.getItem('favorite_movies'))
    console.log(getFavorite)
    setFavoriteMovies(getFavorite)
    console.log(favoriteMovies)
  },[refresh])

      console.log(favoriteMovies)

  return (
    <div>
      {favoriteMovies ? <h1>您還沒有加入最愛</h1> : <CardsGroup movies={favoriteMovies} favoriteModal={true} refresh={refresh} setRefresh={setRefresh} />}
    </div>
  )
}

export default Favorite