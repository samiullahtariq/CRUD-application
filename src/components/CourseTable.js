
import {Table} from 'react-bootstrap'


const CourseTable = (props) => {
    return (
        <>
          <h1 className="text-center ">CourseDetail</h1>
            <Table striped bordered hover variant="dark" className="mt-3">
  <thead>
    <tr>
      <th>ID</th>
      <th>Std Name</th>
      <th>Teacher Name</th>
      <th>Std Roll No</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   {props.records.map((value, index)=>{

    return( 
   <tr>
      <td>{index + 1}</td>
      <td>{value.name}</td>
      <td>{value.teacherName}</td>
      <td>{value.rollNo}</td>

      <td>
      <button className="btn btn-sm btn-info" onClick={()=>props.edit(value.rollNo)}>
        ✍
      </button>
      &nbsp;
      <button className="btn btn-sm btn-danger" onClick={()=>props.del(value.rollNo)}>
        🚮
      </button>
      </td>
    </tr>)

   }) }
  </tbody>
</Table>
        </>
    )
}

export default CourseTable
