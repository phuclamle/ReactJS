import React, {useState,useEffect} from "react";
 

// useEffect(callback,[deps])
// có 3 trường hợp sử dụng
// 1.useEffect(callback)
// -callback sẽ được gọi lại mỗi khi cập nhật state (setState)
// 2.useEffect(callback,[])
// -callback chỉ được gọi 1 lần khi component mounted vào DOM
// 3.useEffect(callback,[deps])
// --
// Chức năng: side effects (những tác động bên cạnh)
// call API
// Update DOM
// set Interval, setTimeout
// listen event DOM

// input: callback, dependency
// output: void

// Nguyên tắc chung:
// 1. callback luôn được gọi khi component được mounted vào DOM
// 2.component UI sẽ được render -> callback gọi

// const direction = {
//     first: 'f'
// }

function UseEffectWithDeps(){
    // logic
 
    const [postList,setPostList] = useState([])
    const [isFetching,setIsFetching] = useState(false)
    const [page,setPage] = useState(1)
    const [totalPage,setTotalPage] = useState(0)
    const [direction,setDirection] = useState()
    const [jump,setJump] = useState(page)
    const [pageNumbers,setPageNumbers] = useState([])
    const [start,setStart] = useState(1)
    const [end,setEnd] = useState(3)
     
    // const [limitpage,setLimitPage] = useState([])
    useEffect (()=>{
       setIsFetching(true)
        fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setPostList(result.data)
        setIsFetching(false)
        const {data,pagination} = result;
        let limit =  pagination._limit 
        let totalRows =  pagination._totalRows 
        let pages = Number(Math.ceil(totalRows/limit))
        setTotalPage(pages)
        // let pagination = new Array(totalPage)
        // setLimitPage(pagination)
        console.log(generatePageNumber(pages,start,end));
        setPageNumbers(generatePageNumber(pages,start,end))

        console.log(pageNumbers);
      }
      )
      
    },[page,start,end])
    const handleFirst = (e)=>{
        e.preventDefault()
        setPage(1)
        
        setDirection('first')
    }
   
    const handleNext = (e)=>{
        e.preventDefault()
        if(page < totalPage){
            setPage(page + 1)
           if(page >= 2){
            setStart(page - 1)
            setEnd(page + 1)
           }
          
           setDirection('next')
        }

       
    }
    const handlePrevious = (e)=>{
        e.preventDefault()
       if(page > 1){
        setPage(page -1)
        setDirection('prev')
       }
       
    }

    const handleLast = (e)=>{
        e.preventDefault()
        setPage(totalPage)
        setDirection('last')
    }
    const handleJumpPage = (e)=>{
        e.preventDefault()
        if(jump < 1 || jump > totalPage){
            alert('invalid page number')
        }
        else{
            if(jump > page){
                setDirection('next')
            }
            if(jump < page){
                setDirection('prev')
            }
            // if(jump == 1){
            //     setDirection('first')
            // }
            // if(jump == totalPage){
            //     setDirection('last')
            // }
            setPage(jump)
        }
    }
    const handleChangePage = (e,pageNumber)=>{
        e.preventDefault()
        if(pageNumber > page){
            setDirection('next')
        }
        if(pageNumber < page){
            setDirection('prev')
        }
        setPage(pageNumber)
    }
    
    // ui
 

    return(
        <div className="">
            <div>
                <ul className="pagination ">
                <li className={`page-item ${page <= 1 ? 'disabled':''} ${direction == 'first'? 'active': ''} `}><a href="" className="page-link" onClick={handleFirst}>First</a>
                </li>
                <li className={`page-item ${page <= 1 ? 'disabled':''} ${direction == 'prev'? 'active': ''} ${page <= 1? 'disabled':''}`}><a href="" className="page-link" onClick={handlePrevious}>Previous</a>
                </li>
                {
                    pageNumbers.map((item) =>(
                        <li key={item} className={`page-item ${item == page? 'active': ''}`}><a href="" className="page-link" onClick={(e)=>handleChangePage(e,item)}>{item}</a>
                        </li> 
                    ))
                }
               
                <li className={`page-item ${page >=totalPage? 'disabled':''} ${direction == 'next'? 'active': ''}`}><a href="" className="page-link" onClick={handleNext}>Next</a>
                </li>
                <li className={`page-item ${page >=totalPage? 'disabled':''} ${direction == 'last'? 'active': ''}`}><a href="" className="page-link" onClick={handleLast}>Last</a>
                </li>
                <li className='page-item'>
                    <form action="" onSubmit={handleJumpPage}>
                    <input className="form-control page-link " type="number" 
                    onInput={(e)=>setJump(Number(e.target.value))}
                    />
                    </form>
                </li>
                </ul>
            </div>
            <h1 >Post List</h1>
            {isFetching ?(<p className="text-danger">Loading...</p>):(
            <div className="row">
               {
                postList.map((post)=>(
                    <div key={post.id} className="col-md-6 mb-2">
                    <div className="card">
                        <img src={post.imageUrl} alt="" />
                        <div className="card-body">
                            <p>{post.description}</p>
                        </div>
                    </div>
                </div>
                ))
               }
            </div>
            )}
            
        </div>
    )
}

function generatePageNumber(number,start,end){
    let pageNumbers = []
    for(let i = start;i <=end;i++){
        pageNumbers.push(i)
    }
    return pageNumbers
}
export default UseEffectWithDeps;