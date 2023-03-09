import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';


const ProductDetail = () => {
const [product,setProduct]=useState(null)
  let {id}=useParams()
  useEffect(()=>{
    const getProductDetail=async()=>{
      let url=`https://my-json-server.typicode.com/jenny4711/hnm_noona/products/${id}`
      let res = await fetch(url);
      let data = await res.json();
      setProduct(data)
      

    }
getProductDetail()
  },[])

  return (

    <Container>
      <Row>
        <Col className='produt-img'>
        <img src={product?.img}/>

        </Col>
        <Col>
        <div>{product?.title}</div>
        <div>{product?.price}</div>
        <div>{product?.choice === true?"Conscious choice":""}</div>
        <div>{product?.new === true?"신제품":""}</div>
        <div>
        <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
      Size
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {product?.size.map((s)=>(<Dropdown.Item href="#/action-1">{s}</Dropdown.Item>))}
        
      </Dropdown.Menu>
      </Dropdown>

        </div>
        




        </Col>

      </Row>

    </Container>
    
  )
}

export default ProductDetail