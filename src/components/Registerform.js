import { useState } from "react"
import { Container , Form , Button } from "react-bootstrap"
import Studentable from "./Studentable"


const Registerform = () => {

    const [register, setRegister] = useState({
        email:"",
        password:""
    })

    

    const [error , setError] =useState("")
    const [success ,setSuccess] = useState({})

    const SubmitDetail =(e)=>{

        e.preventDefault()
        
        let ErrorOccur = false

        if(!register.email || !register.password){
            ErrorOccur = true
        }

        if(ErrorOccur){
            return;
        }

        const newRecords = ({...register , id:new Date().getTime().toString()})
        setRecords([...records, newRecords])
        setSuccess("true")

        setRegister({
            email:"",
            password:""
        })
    }

     
  

    const [records , setRecords] =useState([])

    const HandleInput=(e)=>{
        const value = e.target.value;
        const name = e.target.name
        
        setRegister({...register ,[name]:value})

        if(!value){
            setError("Please fill the required fields")
        }else if(value.length < 4){
            setError("Minimum length should be 5 characters or digits")
        }
      }

      const delete_record = (email) => {

        let _records = [...records];
        for(let index in _records)
        {
            if(_records[index].email === email){
                 _records.splice(index,1);
                break;
            }
        }
        setRecords(_records);
      };




    return (
        <>
        <Container className="mt-3">
            <Form onSubmit={SubmitDetail}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" value={register.email} onChange={HandleInput} name="email" placeholder="Enter email" />
    {error ? <div className='alert-danger'>{error}</div> :""}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" value={register.password} name="password" onChange={HandleInput} placeholder="Password" />
    {error ? <div className='alert-danger'>{error}</div> :""}
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
 <div className="row">
     {success ? <Studentable  delete_record={delete_record} list={records} title={"Student Form"}/> : ""}
 </div>
</Container>
        </>
    )
}

export default Registerform
