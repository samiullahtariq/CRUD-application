

const Studentable = (props) => {


    
    return (

        <>

            <h1 className ="text-center">{props.title}</h1>
          <table className="table table-bordered table-hover mt-3">

          

            <thead>

                <tr>

                    <th>#</th>

                    <th>First Name</th>

                    <th>Last Name</th>

                    <th>Action</th>


                </tr>

            </thead>

        {/* In body we will pass data by props and we will map the rows */}


            <tbody>

            {props.list.map((value, index)=>{
               
                return(
                    <tr key={value.id}>
                 <td>{index + 1}</td>
                 <td>{value.email}</td>
                 <td>{value.password}</td>
                 <td>
                 
                 <button className="btn btn-danger btn-sm" onClick={()=>props.delete_record(value.email)}>🚮</button>

                 </td>
             </tr>
                )
            })}
             
                
            </tbody>

          </table>  
        </>
    )
}

export default Studentable
