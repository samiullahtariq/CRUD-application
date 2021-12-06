import { useState } from "react"
import CustomerTable from "./CustomerTable"
import {Form , Button ,Container} from "react-bootstrap"

const Customerfrom = () => {


    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [cnic, setCnic] = useState("")
    const [phone, setPhone] = useState("")
    const[error , setError] = useState("")
    const[addresser , setAddresser] = useState("")
    const[cnicerr , setCnicerr] = useState("")
    const[phonerr , setPhonerr] = useState("")
    const [is_update , setUpdate] = useState("")
    
    

    const [records ,setRecords] = useState([])


    const SubmitDetail =(e)=>{


        e.preventDefault()

        

        let is_Error = false

        if(!name ){
            setError("Please fill the required field")
            is_Error = true
        }else if(!address){
            setAddresser("Address should not be empty")
            is_Error = true
        }else if(!cnic){
            setCnicerr("Please write your Cnic")
            is_Error = true
        }else if(!phone){
            setPhonerr("Please write your phone No")
            is_Error = true
        }

        

        if(is_Error){
            return;
        }

        

        setName("")
        setAddress("")
        setCnic("")
        setPhone("")
        
        let _records = [...records];

        if(is_update)
        {
            for(let row of records)
            {
                if(row.name === name){
                    row.name = name;
                    row.address = address;
                    row.cnic = cnic;
                    row.phone = phone
                    break;
                }
            }
        }
        else
        {

            //This is the part where we getting data from 
            _records.push({
                name : name,
                address : address,
                cnic:cnic,
                phone : phone
            });
        }
    
    
        setUpdate(false);
        setRecords(_records)

        

    }

    const update = (name) => {

        for(let row of records)
        {
            if(row.name === name){
                setName(row.name);
                setAddress(row.address);
                setCnic(row.cnic);
                setPhone(row.phone)
    
                setUpdate(true);
                break;
            }
        }
      };
    
      const delete_record = (name) => {
    
        let _records = [...records];
        for(let index in _records)
        {
            if(_records[index].name === name){
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
  <Form.Group className="mb-3" controlId="fullName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" value={name} onChange={(e)=>{

        let value = e.target.value
        setName(value)

        if(!value){
            setError()
        }else if(value.length < 4){
            setError("The minimum characters or digits should be 5")
        }else{
            setError("")
        }

    }}
     placeholder="Enter your Name here" />

    {
        error ? <div className="alert-warning">{error}</div> : ""
    }

  </Form.Group>

  <Form.Group className="mb-3" controlId="address">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" value={address} onChange={(e)=>{

        let value = e.target.value
        setAddress(value)

        if(!value){
            setAddresser()
        }else if(value.length < 4){
            setAddresser("The minimum characters or digits should be 5")
        }else{
            setAddresser("")
        }

    }}
     placeholder="Enter your address here" />

    {
        addresser ? <div className="alert-warning">{addresser}</div> : ""
    }

  </Form.Group>

  <Form.Group className="mb-3" controlId="CNIC">
    <Form.Label>CNIC</Form.Label>
    <Form.Control type="number" value={cnic} onChange={(e)=>{

        let value = e.target.value
        setCnic(value)

        if(!value){
            setCnicerr()
        }else if(value.length < 4){
            setCnicerr("The minimum characters or digits should be 5")
        }else{
            setCnicerr("")
        }

    }}
    placeholder="Enter your CNIC here" />

    {
        cnicerr ? <div className="alert-warning">{cnicerr}</div> : ""
    }

  </Form.Group>

  
  <Form.Group className="mb-3" controlId="phoneNumber">
    <Form.Label>Telephone NO.</Form.Label>
    <Form.Control type="text"  value={phone} onChange={(e)=>{

        let value = e.target.value
        setPhone(value)

        if(!value){
            setPhonerr()
        }else if(value.length < 4){
            setPhonerr("The minimum characters or digits should be 5")
        }else{
            setPhonerr("")
        }

    }}
    placeholder="Enter your phone number here" />

    {
        phonerr ? <div className="alert-warning">{phonerr}</div> : ""
    }

  </Form.Group>
  
  <Button variant="primary" type="submit">
    {is_update ? "Update" : "Submit"}
  </Button>
</Form>

 <div className="row mt-3">
      <CustomerTable list={records} update={update} delete={delete_record} />   
     
 </div>

 </Container>
            
        </>
    )
}

export default Customerfrom
