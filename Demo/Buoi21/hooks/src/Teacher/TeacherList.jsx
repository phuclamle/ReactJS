import React, {useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import {toast} from 'react-toastify'
import Swal from 'sweetalert2';

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    dob: yup.date().required().typeError("dob is a required field"),
    avatar: yup.string().required().url(),
    gender: yup.string().required()
})

function TeacherList(){
    const [teacherList,setTeacherList] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [departmentList,setDepartmentList] = useState([])
    const [toggleForm,setToggleForm]= useState(false)
    const [removeTeacher,setRemoveTeacher] = useState([])
    const {register,handleSubmit,formState:{errors}, reset} = useForm({
        resolver: yupResolver(schema)  
    })
    async function fetchData(){
        let res = await  fetch('https://6559689ce93ca47020aa363f.mockapi.io/teacher')
        let data = await res.json();
        setTeacherList(data)
        setIsLoading(false)
    }

    useEffect(()=>{
        setIsLoading(true)
        fetchData()
    },[removeTeacher])
    // console.log(departmentList);

    useEffect(()=>{
        setIsLoading(true)
        async function fetchDepartment(){
            let departRes = await fetch('https://6559689ce93ca47020aa363f.mockapi.io/department')
            let data = await departRes.json()
            setDepartmentList(data)
                setIsLoading(false)
        }
        fetchDepartment()
        // react v.18 yêu cầu tách bất đồng bộ API thành 1 hàm riêng
    },[])
    console.log(departmentList);

   const handleAddTeacher = (data) =>{
    data.department = JSON.parse(data.department)
    setIsLoading(true)
    async function postTeacher(){
        const createTecherRes = await fetch('https://6559689ce93ca47020aa363f.mockapi.io/teacher',{
            method: "POST",
            headers: {
                "Content-Type" : 'application/json'
            },
            body:JSON.stringify(data)
        })

        const createTecherResult = await createTecherRes.json();
        if(createTecherResult){
            toast.success(`Teacher ${createTecherResult.name} added success`)
            fetchData()
            reset()
        }
    }
    postTeacher();
    
   }

   const handleRemoveTeacher = (teacher) =>{
    Swal.fire({
        title: "Are you sure remove?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
                 fetch(`https://6559689ce93ca47020aa363f.mockapi.io/teacher/${teacher.id}`,
            {
                method: "DELETE"
            }
        )
            .then((res)=> res.json())
            .then(result =>{
                toast.success(`Teacher ${result.name} remove success`)
                setRemoveTeacher(result)
            })
        }
      });
      
    // let confirm = window.confirm(`Are sure remove teacher ${teacher.name}?`)
    // if(confirm){
  
    // }
   }

    
    return(
        <>
         <div>
        <h3>Teacher List</h3>
        </div>

        <section>
            <div>
                <button className="btn btn-sm btn-warning" onClick={()=>setToggleForm(!toggleForm)}>Add Teacher</button>
                <div>
                    {
                        toggleForm && 
                        <form onSubmit={handleSubmit(handleAddTeacher)}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label className="form-label">Fullname <span className="text-danger">(*)</span></label>
                                    <input type="text" className="form-control" placeholder="Fullname"
                                    {...register('name')}
                                    />
                                    <span className="text-danger">{errors.name?.message}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Email<span className="text-danger">(*)</span></label>
                                    <input type="email" className="form-control" placeholder="Email" 
                                     {...register('email')}
                                    />
                                     <span className="text-danger">{errors.email?.message}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Dob<span className="text-danger">(*)</span></label>
                                    <input type="date" className="form-control" placeholder="Date of birth"
                                     {...register('dob')}
                                    />
                                     <span className="text-danger">{errors.dob?.message}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <button className="btn btn-sm btn-success me-3">Create</button>
                                    <button className="btn btn-sm btn-dark" onClick={()=>reset()}>Cancel</button>

                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group mb-3">
                                    <label className="form-label">Avatar <span className="text-danger">(*)</span></label>
                                    <input type="url" className="form-control" placeholder="Avatar URL"
                                     {...register('avatar')}
                                    />
                                     <span className="text-danger">{errors.avatar?.message}</span>
                                </div>
                                <div className="form-group mb-3">
                                <label className="form-label">Gender</label>
                               <div className="mt-2">
                               <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio"  value={"Male"} {...register('gender')} />
                                    <label className="form-check-label" checked >Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio"   value={"Female"} {...register('gender')}  />
                                    <label className="form-check-label" >Female</label>
</div> 
                                </div>
                                <span className="text-danger">{errors.gender?.message}</span>
                               </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Department</label>
                                    <select className="form-control" {...register('department')}>
                                        {
                                            departmentList.map((depart)=>(
                                                <option value={JSON.stringify(depart)}>
                                                    {depart.name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                    }
                   
                </div>
            </div>
        </section>
       <section>
      
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
                    <th>Department</th>
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
                        <td>{dayjs(teacher.dob).format("DD/MM/YYYY")}</td>
                        <td>{teacher.email}</td>
                        <td>{teacher.gender}</td>
                        <td>{teacher.department?.name}</td>
                         <td>
                            <Link to={`/teacher/${teacher.id}`} className="btn btn-sm btn-primary">Detail</Link>
                            <Link to={`/teacher/modify/${teacher.id}`} className="btn btn-sm btn-success">Modify</Link>
                            <button type="button" className="btn btn-sm btn-danger m-1"
                                onClick={()=>handleRemoveTeacher(teacher)}
                            >Remove</button>

                         </td>
                    </tr>
                ))
            }
        </tbody>
        </table>
            </>
        }
       </section>
        </>
    )
}

export default TeacherList;