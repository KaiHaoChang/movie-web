import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchBtn = ({setMovies, setTotalPages, pageNumber, setIsSeach, setCurrentPage, search, setSearch}) => {
  
  const handleSearch = async () => {
    if (!search.length) {
      setIsSeach(false)
      setCurrentPage(1)
      return
    }
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=725fb0d5c82abd1b20f9081367bda7e5&language=en-US&query=${search}&page=${pageNumber}&include_adult=false`)
    const data = await res.json()
    setTotalPages(data.total_pages)
    setMovies(data.results)
    setIsSeach(true)
    setCurrentPage(1)
  } 

  return (
      <InputGroup className="mb-3 p-2">
        <Form.Control placeholder='movie name...' onChange={e => setSearch(e.target.value)}/>
        <Button variant="primary" onClick={()=>handleSearch(search)} >
          Search
        </Button>
      </InputGroup>
  )
}

export default SearchBtn