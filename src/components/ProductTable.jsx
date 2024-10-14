import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ProductTable = () => {
    const [productdata,fetchProductData] = useState([])
    const url = 'http://127.0.0.1:5000/product'
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJNb2hhIiwiZXhwIjoxNzI4Mzk2MTI2fQ.PsWwG8T7Pc6zUWMKFjFwfKYt0M31S24AvcoRGK-qKGs"

    const fetchProducts = async ()=>{
        try {
            const response = await axios.get(url) ;
            fetchProductData(response.data.products)

        }
        catch(e){
            console.log("Error fetching products:",e)

        }
    }

    useEffect(()=>{
        fetchProducts()
    },[])

  return (
    <div>
      <h4>My Duka Products </h4>

        
            
                <div>
                    <table className='table border'>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Product Name</td>
                                <td>Buying Price</td>
                                <td>Selling Price</td>
                                <td>Stock Quantity</td>

                            </tr>
                        </thead>
                        {productdata.map((product,index)=>(
                        <tbody className='border' key={product.id}>
                            <tr >
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.buying_price}</td>
                                <td>{product.selling_price}</td>
                                <td>{product.stock_quantity}</td>
                            </tr>
                        </tbody>
                    ))}
                    </table>
                </div>
            

        



      {/* {productdata.map(product=>(
        <div key={product.id} >
            <p>Product Name : {product.name}</p>
            <p>Buying Price : {product.buying_price}</p>
            <p>Selling Price : {product.selling_price}</p>
            <p>Stock Quantity : {product.stock_quantity}</p> <br /><br />
        </div>
      )

      )} */}
    </div>
  )
}

export default ProductTable
