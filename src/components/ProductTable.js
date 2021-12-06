
import {Table} from 'react-bootstrap'


const ProductTable = (props) => {
    return (
        <>
          <h1 className="text-center ">Product Data</h1>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th> Name</th>
      <th>Stock</th>
      <th>Detail</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   {props.list.map((row, index)=>{

    return( 
   <tr>
      <td>{index + 1}</td>
      <td>{row.name}</td>
      <td>{row.stock}</td>
      <td>{row.detail}</td>
      <td>{row.price}</td>
      <td>
      <button className="btn btn-sm btn-info" onClick={()=>props.edit(row.name)}>
        ✍
      </button>
      &nbsp;
      <button className="btn btn-sm btn-danger" onClick={()=>props.del(row.name)}>
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

export default ProductTable
