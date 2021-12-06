import { useState } from 'react'
import {Form , Button ,Container} from 'react-bootstrap'
import CourseTable from './CourseTable'


const Courseform = () => {

    const [update , setUpdate] = useState("")

    const [name,setName] = useState("")
    const [nameErr ,setNameErr] = useState("")
    
    

    const [teacherName ,setTeacherName] =useState("")
    const [err , setErr] = useState("")

    const [rollNo , setRollNo] = useState("")
    const [rollErr , setRollErr] = useState("")

    const [records , setRecords] = useState([])

    const Submit =(e)=>{

        e.preventDefault()

        let is_Err = false

        if(!name){
            setNameErr("The Name field cannot be empty")
            is_Err = true
        }else if(!teacherName){
            setErr("Enter the Teacher Name")
            is_Err = true
        }else if(!rollNo){
            setRollErr("Please Enter the Roll NO")
            is_Err = true
        }
         
        if(is_Err){
            return;
        }
         
        let _records =[...records]

        if(update){
            for(let index of records){
                if(index.rollNo === rollNo){
                    index.name = name
                    index.teacherName = teacherName
                    index.rollNo = rollNo
                    break
                }
            }
        }else{

            _records.push({
                name : name,
                teacherName:teacherName,
                rollNo :rollNo,
            })

        }
        
        setUpdate(false)
        setRecords(_records)

        setName("")
        setTeacherName("")
        setRollNo("")

    }
     

    const Edit_Records=(rollNo)=>{

        for(let index of records){
            if(index.rollNo === rollNo){
                setName(index.name)
                setTeacherName(index.teacherName)
                setRollNo(index.rollNo)

                setUpdate(true);
                break;
            }
        }
    }

    const Delete_Records=(rollNo)=>{

        let _records =[...records]

        for(let index in _records){
            if(_records[index].rollNo === rollNo ){
                _records.splice(index , 1)
                break;
            }
        }

        setRecords(_records)

    }
  
    return (
        <>
        <Container>
           <Form onSubmit={Submit} className="mt-3">
  <Form.Group className="mb-3" controlId="stdName">
    <Form.Label>Student Name</Form.Label>
    <Form.Control type="text" value={name}

    onChange={(e)=>{
        let value = e.target.value
        setName(value)
        if(!value){
            setNameErr()
        }else{
            setNameErr("")
        }
    }}
    
     
     placeholder="Enter student name here" />

    {
         nameErr ? <div className="alert-danger">{nameErr}</div> : ""
     }
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="teacherName">
    <Form.Label>Teacher Name</Form.Label>
    <Form.Control type="text" value={teacherName}
    onChange={(e)=>{
        let value = e.target.value
        setTeacherName(value)
        if(!value){
            setErr()
        }else{
            setErr("")
        }
    }}
     placeholder="Enter teacher name here" />
      {
         err ? <div className="alert-danger">{err}</div> : ""
     }
  </Form.Group>

  <Form.Group className="mb-3" controlId="teacherName">
    <Form.Label>Student Roll No</Form.Label>
    <Form.Control type="number" value={rollNo}
    onChange={(e)=>{
        let value = e.target.value
        setRollNo(value)
        if(!value){
            setRollErr()
        }else{
            setRollErr("")
        }
    }}
     placeholder="Enter Your Roll No here" />
     {
         rollErr ? <div className="alert-danger">{rollErr}</div> : ""
     }
  </Form.Group>
 
  <Button variant="primary" type="submit">
  { update ? "Update" :  "Submit"}
  </Button>
</Form> 

<div className="row mt-3">

 <CourseTable records={records} edit={Edit_Records} del={Delete_Records}/>
</div>
</Container>
        </>
    )
}

export default Courseform
