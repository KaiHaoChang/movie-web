import React,{useState, useEffect} from 'react'
import Pagination from 'react-bootstrap/Pagination';

const Paginations = ({pageNumber, setPageNumber, totalPages, currentPage, setCurrentPage, setTotalPages}) => {

  if (totalPages > 500) {
    setTotalPages(500)
  }

  const [pageShow, setPageShow] = useState([1,2,3,4,5])
  console.log(totalPages)
  
  useEffect(()=>{
    renderPagination()
  },[currentPage])
  
  const onPageChange = (page) => {
    setCurrentPage(page)
    renderPagination()
    // 好像只有500頁
    setPageNumber(page)
  }
 
  const renderPagination = () => {
    if (totalPages <= 5) {
      switch (totalPages) {
        case 5: setPageShow([1,2,3,4,5])
          break;
        case 4: setPageShow([1,2,3,4])
          break;
        case 3: setPageShow([1,2,3])
          break;
        case 2: setPageShow([1,2])
          break;
        case 1: setPageShow([1])
          break;
        default: setPageShow([1,2,3,4,5])
    }
  } else if (totalPages > 5) {
    if (currentPage <= 3) {
      setPageShow([1,2,3,4,5])
    } else if (currentPage >= totalPages - 2) {
      setPageShow([totalPages - 4,totalPages - 3,totalPages - 2,totalPages - 1,totalPages])
    } else {
      setPageShow([currentPage - 2,currentPage - 1,currentPage,currentPage + 1,currentPage + 2])
    }
  }
}

  const toFirstOrLastPage = (check) => {
    if (check === 'first'){
      setCurrentPage(1)
      setPageNumber(1)
    } else if (check === 'last'){
      if (totalPages.total_pages > 500) {
        setCurrentPage(500)
        setPageNumber(500)
      } else {
        setCurrentPage(totalPages)
        setPageNumber(totalPages)
      }
    }
  }

  const toPreviousPage = () => {
    if (currentPage - 1 > 0) {
      setCurrentPage(currentPage-1)
      setPageNumber(currentPage-1)
    } else {
      setCurrentPage(1)
      setPageNumber(1)
    }
  }
  const toNextPage = () => {
    if (currentPage + 1 < 500) {
      setCurrentPage(currentPage+1)
      setPageNumber(currentPage+1)
    } else {
      setCurrentPage(totalPages)
      setPageNumber(totalPages)
    }
  }

  return (
    <Pagination>
      <Pagination.First onClick={()=>toFirstOrLastPage('first')} />
      <Pagination.Prev onClick={()=>toPreviousPage()} />
      {pageShow.map(page => {
        return(
          <Pagination.Item key={page} onClick={()=>onPageChange(page)}>{page}</Pagination.Item>
        )
      })}
      <Pagination.Next onClick={()=>toNextPage()} />
      <Pagination.Last onClick={()=>toFirstOrLastPage('last')} />
    </Pagination>
  )
}

export default Paginations