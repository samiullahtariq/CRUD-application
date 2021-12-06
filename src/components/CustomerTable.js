
import {Table} from 'react-bootstrap'


const CustomerTable = (props) => {
    return (
        <>
          <h1 className="text-center ">Student Data</h1>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th> Name</th>
      <th>Address</th>
      <th>CNIC</th>
      <th>Phone</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   {props.list.map((value, index)=>{

    return( 
   <tr>
      <td>{index + 1}</td>
      <td>{value.name}</td>
      <td>{value.address}</td>
      <td>{value.cnic}</td>
      <td>{value.phone}</td>
      <td>
      <button className="btn btn-sm btn-info" onClick={()=>props.update(value.name)}>
        ✍
      </button>
      &nbsp;
      <button className="btn btn-sm btn-danger" onClick={()=>props.delete(value.name)}>
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

export default CustomerTable
