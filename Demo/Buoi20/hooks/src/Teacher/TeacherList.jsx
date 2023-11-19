import React, {useState ,useEffect} from "react";
import { Link } from "react-router-dom";

function TeacherList(){
    const [teacherList,setTeacherList] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    useEffect(()=>{
        setIsLoading(true)
        // react v.18 yêu cầu tách bất đồng bộ API thành 1 hàm riêng
        fetch('https://6559689ce93ca47020aa363f.mockapi.io/teacher')
            .then( (response)=>{
                return response.json()
            })
            .then( (data)=>{
                setTeacherList(data)
                setIsLoading(false)
            })
        
    },[])

    console.log(teacherList);
    return(
        <>
        <div>
        <h3>Teacher List</h3>
        </div>
        {
            isLoading? <p>Loading...</p> : <> 
            <table className="table">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Fullname</th>
                    <th>DOB</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Actions</th>
                </tr>
            </thead>
       
        <tbody>
            {
                teacherList.map((teacher)=>(
                    <tr key={teacher.id}>
                        <td>{teacher.id}</td>
                        <td>
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle avatar-sm" src={teacher.avatar} alt="" />
                                {teacher.name}
                            </div>

                        </td>
                        <td>{teacher.dob}</td>
                        <td>{teacher.email}</td>
                        <td>{teacher.gender ? "Male": "Female"}</td>
                         <td>
                            <Link to={`/teacher/${teacher.id}`} className="btn btn-sm btn-success">Detail</Link>
                         </td>
                    </tr>
                ))
            }
        </tbody>
        </table>
            </>
        }
        </>
    )
}

export default TeacherList;