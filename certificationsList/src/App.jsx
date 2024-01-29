import { useEffect, useState } from 'react'
import Records from './Record.json';
import './App.css'
import ReactPaginate from 'react-paginate';

function App() {

  const [Record, setRecord] = useState(Records);
  const [pageCount, setPageCount] = useState(0);
  
  var firstIndex = 0;
  var lastIndex = 3;

  useEffect(()=>
  {
    let total = Records.length;
    setPageCount(total/3);
    setRecord(Records.slice(0,3));
  },[])

  

  const handlePageClick = (data) =>
  {

    firstIndex = (data.selected * 3)
    lastIndex = firstIndex + 3;
    setRecord(Records.slice(firstIndex,lastIndex));
  }

  const handleImageClick = (e)=>
  {
    document.querySelector('.pop-img').style.display = "block";
    document.querySelector('.pop-img img').src = e.target.src;
  }

  const handleExit = ()=>
  {
    document.querySelector('.pop-img').style.display = "none";
    
  }


  


  return (
    <>

    <div className='container'>
      <p className='name'>MARIA ASHRAF J P</p>
      <p className='title'>My Certifications</p>
    </div>

    


    <div className='container1'>

      

      {

        Record.map((value,index) =>
        {
          return(
            <div className='imageContainer' key={index}>
              <img src={value.src} onClick={handleImageClick}></img>
              <p className='caption'>{value.caption}</p>
            </div>
          )
        })


      }

    </div>

    <div className='pop-img'>
      <span onClick={handleExit}>&times;</span>
      <img src='images/jenkins.jpg'></img>
    </div>

    <ReactPaginate 
    previousLabel={"Previous"}
    nextLabel={"Next"}
    breakLabel={"..."}
    pageCount={pageCount}
    onPageChange = {handlePageClick}
    containerClassName={'pagination justify-content-center'}
    pageClassName={'page-item'}
    pageLinkClassName={'page-link'}
    previousClassName={'page-item'}
    previousLinkClassName={'page-link'}
    nextClassName={'page-item'}
    nextLinkClassName={'page-link'}
    breakClassName={'page-item'}
    breakLinkClassName={'page-link'}
    activeClassName={'active'}
    />
  
    </>
  )
}

export default App
