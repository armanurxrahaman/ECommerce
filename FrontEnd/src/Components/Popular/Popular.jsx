import React,{useState,useEffect} from 'react'
import './Popular.css'

import Item from '../Item/Item'

const Popular = () => {

  const [popularProducts,setpopularProducts] = useState([]);
  
  useEffect(()=>{
   fetch('http://localhost:4000/popularinmen')
   .then((response)=>response.json())
   .then((data)=>setpopularProducts(data));
  },[])

  return (
    <div className='popular'>
      <h1>POPULAR</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
