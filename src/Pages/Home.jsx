import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { addTocart } from '../store/slices/shopCartSlice';
import { useDispatch } from 'react-redux';


function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const API_Key = "https://api.escuelajs.co/api/v1/products";

  const getProducts = async () => {
    try{
      const response = await axios.get(API_Key);
      console.log(response.data);
      setProducts(response.data);
    }catch(err){
      console.log("Error", err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
     <div className='main-div'>

      <h1>Product List</h1>
      <div className='products-wrapper'>
        {
          products.map((product, index) => (
            <div key={index} className='product-card'>
              <div className='prod-img-wrap'>
                <img src={product.images} alt={product.title} className='product-img' width="200" height="200"/>
              </div>
              <div className='product-info'>
                <h2 style={{marginBottom:"10px", color:"black", fontSize:"18px"}}>{product.title}</h2>
              <p className='product-desc' style={{marginBottom:"25px", color:"grey", fontSize:"16px"}}>{product.description}</p>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <div>
                  <p style={{fontSize:"10px", marginBottom:"5px", color:"black", fontWeight:"bold"}}>PRICE</p>
                  <p className='product-price' style={{fontSize:"18px" , color:"black", fontWeight:"bolder"}}>${product.price}</p>
                </div>
                <button className='btn btn-primary' onClick={() => dispatch(addTocart(product))}>Add</button>
              </div>
              </div>
            </div>
          ))
        }
      </div>
     </div>
  )
}

export default Home