import {Form , Button ,Container } from 'react-bootstrap'
import {useState} from 'react'
import ProductTable from './ProductTable'


const Productform = () => {


    const[name , setName] =useState("")
    const[nameErr ,setNameErr] =useState("")

    const[stock , setStock] =useState("")
    const[stockErr ,setStockErr] =useState("")

    const[detail , setDetail] =useState("")
    const[detailErr ,setDetailErr] =useState("")

    const[price , setPrice] =useState("")
    const[priceErr ,setPriceErr] =useState("")

    const [records ,setRecords] = useState([])
    const [update ,setUpdate] = useState("")

    const Submit = (e)=>{

        e.preventDefault()


        let is_Err = false

        if(!name){
            setNameErr("Name cannot be empty")
            is_Err = true
        }else if(!stock){
            setStockErr("Stock cannt be empty")
            is_Err = true
        }else if(!detail){
            setDetailErr("Detail should not be empty")
            is_Err = true
        }else if(!price){
            setPriceErr("Please write a price of the product")
            is_Err = true
        }

        if(is_Err){
            return;
        }   
         
        setName("")
        setStock("")
        setDetail("")
        setPrice("")


        let _records =[...records]

        if(update){
            for(let value of records){
                if(value.name === name){
                    value.name = name
                    value.stock = stock
                    value.detail = detail
                    value.price = price
                }
            }
        }else{
            _records.push({
                name : name,
                stock : stock,
                detail : detail,
                price : price
            })
        }

        

        
        setUpdate(false)
        setRecords(_records)

       

    }

     
    const Edit_records = (name)=>{

        for(let value of records){
            if(value.name === name){
                setName(value.name)
                setStock(value.stock)
                setDetail(value.detail)
                setPrice(value.price)

                setUpdate(true)
                break;
            }
        }
    }

    const Del_records =(name)=>{

        let _records =[...records]
        for(let index in _records){
            if(_records[index].name === name){
                _records.splice(index ,1)
                break;
            }  
        }

        setRecords(_records)

    }

    return (
        <>
        <Container className="mt-3">
           <Form onSubmit={Submit}>
  <Form.Group className="mb-3" controlId="name">
    <Form.Label>Product Name</Form.Label>
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
    placeholder="Enter product name" />

    {
        nameErr ? <div className="alert-danger">{nameErr}</div> : ""
    }
  </Form.Group>

  <Form.Group className="mb-3" controlId="stock">
    <Form.Label>Stock</Form.Label>
    <Form.Control type="number" value={stock}
    onChange={(e)=>{
        let value = e.target.value
        setStock(value)
        if(!value){
            setStockErr()
        }else{
            setStockErr("")
        }
    }}
     placeholder="Enter Stock you need" />
     {
         stockErr ? <div className="alert-danger">{stockErr}</div> : ""
     }
  </Form.Group>

  <Form.Group className="mb-3" controlId="detail">
    <Form.Label>Detail</Form.Label>
    <Form.Control type="text" value={detail}
    onChange={(e)=>{
        let value = e.target.value
        setDetail(value)
        if(!value){
            setDetailErr()
        }else{
            setDetailErr("")
        }
    }}
     placeholder="Enter detail of product" />
     {
         detailErr ? <div className="alert-danger">{detailErr}</div> : ""
     }
  </Form.Group>

  <Form.Group className="mb-3" controlId="detail">
    <Form.Label>Price</Form.Label>
    <Form.Control type="number"  value={price}
    onChange={(e)=>{
        let value = e.target.value
        setPrice(value)
        if(!value){
            setPriceErr()
        }else{
            setPriceErr("")
        }
    }}
    placeholder="Enter Price in Pakistani Ruppes" />
    {
         priceErr ? <div className="alert-danger">{priceErr}</div> : ""
     }
  </Form.Group>
  
  <Button variant="primary" type="submit">
    { update ? "Update" : "Submit"}
  </Button>
</Form> 

<div className="row">
    <ProductTable edit={Edit_records} del={Del_records} list={records}/>
</div>
</Container>


        </>
    )
}

export default Productform
