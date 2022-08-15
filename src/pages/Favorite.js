import React, {useState, useEffect} from 'react'
import CardsGroup from '../components/CardsGroup'

const Favorite = () => {

  const [favoriteMovies, setFavoriteMovies] = useState([])
  const [refresh, setRefresh] = useState(false);

  useEffect(()=>{
    const getFavorite = () => {
      console.log(favoriteMovies)
      return setFavoriteMovies(JSON.parse(localStorage.getItem('favorite_movies')))
    }
    getFavorite()
  },[refresh])

console.log(favoriteMovies)

  return (
    <div>
      {favoriteMovies ? <h1>您還沒有加入最愛</h1> : <CardsGroup movies={favoriteMovies} favoriteModal={true} refresh={refresh} setRefresh={setRefresh} />}
    </div>
  )
}

export default Favorite