import React from "react";
const ListOfStudent=[
    {
      ID: 1,
      Name: "Phúc Lâm",
      Age: 12,
      Address: "Thuy khue"
    },
    {
      ID: 2,
      Name: "Van Vuong",
      Age: 16,
      Address: "Minh Khai"
    },
    {
      ID: 3,
      Name: "Nguyen Tuan",
      Age: 12,
      Address: "Le Thanh Nghi"
    },
    {
      ID: 4,
      Name: "Khac Viet",
      Age: 11,
      Address: "Tran Dai Nghia"
    },
  ];
 
function ShowStudentList(){
    return(
    <table className="table table-striped table-hover">
        <thead className="table-success">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
        </tr>
        </thead>
        <tbody>
        {
            ListOfStudent.map((student)=>(
                <tr key={student.id}>
                    <td>{student.ID}</td>
                    <td>{student.Name}</td>
                    <td>{student.Age}</td>
                    <td>{student.Address}</td>
                </tr>
            ))
        }
        
    </tbody>
</table>
    )
}

export default ShowStudentList;