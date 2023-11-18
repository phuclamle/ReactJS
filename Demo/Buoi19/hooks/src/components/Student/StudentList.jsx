import React from "react";
import { useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";

const studentList = [
    {
        id: 1,
        fullname: "Lê Phúc"
    },
    {
        id: 2,
        fullname: "Hoàng Nguyễn"
    },
    {
        id: 3,
        fullname: "Lê Na"
    },
]
function StudentList(){
    const navigate = useNavigate()
    useEffect(()=>{
        return () =>{
            console.log('unmounted Student List');
        }
    },[])

     const handleNavigate = () =>{
        navigate("/student/add")
     }
    return(
        <>
        <div className="d-flex align-items-center">
            <h1 className="me-3">Student List</h1>
            {/* <button 
            onClick={handleNavigate}
            className="btn btn-sm btn-primary">Create Student</button> */}
             <Link
            to = {"/student/add"}
            className="btn btn-sm btn-primary">Create Student</Link>
        </div>
        <div>
            <ul>
                {
                    studentList.map((student) =>(
                        <li key={student.id}>
                        <Link
                        to = {`/student/detail/${student.id}/${student.fullname}`}
                         className="ms-3 btn btn-link">{student.fullname}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
        </>
    )
}

export default StudentList;