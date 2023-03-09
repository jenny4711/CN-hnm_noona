import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductDetail from '../page/ProductDetail'
const ProductCard = ({item}) => {
  const navigate=useNavigate()
const showDetail=()=>{
navigate(`/Product/${item.id}`)


}
 
 
  return (
   
    
    <div onClick={showDetail}>
      <img className="card-img" src={item?.img}/>
      <div>{item?.choice ==true?"Conscious choice":""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new == true?"신제품":""}</div>
    </div>
   
  )
}

export default ProductCard