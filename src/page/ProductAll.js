import React,{useState,useEffect} from 'react'
import ProductCard from '../component/ProductCard';
import { Container,Row ,Col} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
const ProductAll = () => {
  const [productList,setProductList]=useState([]);
  const [query,setQuery]=useSearchParams();
  const getProducts =async()=>{
    let searchQuery=query.get('q')||"";
    console.log('query',searchQuery)
    let url=`https://my-json-server.typicode.com/jenny4711/hnm_noona/products?q=${searchQuery}`
    let res = await fetch(url)
    let data=await res.json()
    setProductList(data)
    
  }

  useEffect(()=>{
    getProducts()
  },[query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map(menu=>(
            <Col lg={3}>
              <ProductCard item={menu}/>
            </Col>

          ))}
          
        </Row>

      </Container>

      <ProductCard/>
    </div>
  )
}

export default ProductAll