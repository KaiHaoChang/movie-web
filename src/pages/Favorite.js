import React, {useState, useEffect} from 'react'
import CardsGroup from '../components/CardsGroup'

const Favorite = () => {

  const [favoriteMovies, setFavoriteMovies] = useState([])
  const [refresh, setRefresh] = useState(false);

  useEffect(()=>{
    const getFavorite = () => {
      const favorite = JSON.parse(localStorage.getItem('favorite_movies'))
      console.log(favorite)
      setFavoriteMovies(favorite)
      return
    }
    getFavorite()
  },[refresh])

console.log(favoriteMovies)

  return (
    <div>
      {favoriteMovies.length ? <h1>您還沒有加入最愛</h1> : <CardsGroup movies={favoriteMovies} favoriteModal={true} refresh={refresh} setRefresh={setRefresh} />}
    </div>
  )
}

export default Favorite