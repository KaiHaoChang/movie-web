import React, {useState, useEffect} from 'react'
import CardsGroup from '../components/CardsGroup'
import Paginations from '../components/Paginations'
import SearchBtn from '../components/SearchBtn'


const MovieList = () => {

  const [movies, setMovies] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [totalPages, setTotalPages] = useState([])
  const [currentPage, setCurrentPage] = useState(pageNumber)
  const [isSeach, setIsSeach] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(()=>{
    if (!isSeach) {
      const getMovieList = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=725fb0d5c82abd1b20f9081367bda7e5&language=en-US&page=${pageNumber}`)
        const data = await res.json()
        setMovies(data.results)
        setTotalPages(data.total_pages)
      }
      getMovieList()
    }  else  {
      const getMovieList = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=725fb0d5c82abd1b20f9081367bda7e5&language=en-US&query=${search}&page=${pageNumber}&include_adult=false`)
        const data = await res.json()
        setMovies(data.results)
        setTotalPages(data.total_pages)
      }
      getMovieList()
    }
  },[pageNumber, isSeach])
  return (
    <div>
      <SearchBtn setMovies={setMovies} movies={movies} setTotalPages={setTotalPages} setPageNumber={setPageNumber} setIsSeach={setIsSeach} setCurrentPage={setCurrentPage} search={search} setSearch={setSearch} />
      <Paginations currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} setPageNumber={setPageNumber} totalPages={totalPages} setTotalPages={setTotalPages}  />
      <CardsGroup movies={movies} />
      <div>Current Page: {pageNumber}</div>
      <Paginations currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} setPageNumber={setPageNumber} totalPages={totalPages} setTotalPages={setTotalPages}  />
    </div>
  )
}

export default MovieList