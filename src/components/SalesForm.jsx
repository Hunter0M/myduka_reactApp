import { useEffect, useState } from "react";
import axios from "axios";

const SalesForm =()=>{
    const url = "http://127.0.0.1:5000/"
    const [products,setProducts] = useState([])
    const [sales,setSales] = useState({
        pid:"",
        quantity:""
    })
    
    const getProducts = async ()=>{
        try{
            const response = await axios.get(url + 'product' )
            // console.log(response.data.products)
            setProducts(response.data.products)
        }
        catch(e){
            console.log("Error fetching products:",e)
        }
    }
    useEffect(()=>{
        getProducts()
    },[])

    const handleChange=(e)=>{
        const {name,value} = e.target
        setSales({
            ...sales,
            [name]:value
        })

    }

    const postSale = async (event)=>{
        event.preventDefault()
        try{
            const response = await axios.post(url + "sales",sales)
            console.log(response.data)
        }
        catch(e){
            console.log("Error posting sales:",e)
        }
        
    }
    
    return(
        <div>
            <form  onSubmit={postSale}>
                <div>
                   <select  className="border border-black" name="pid" onChange={handleChange} >
                        <option value="">Select Product</option>
                        {products.map(product=>(
                            <option key={product.id} value={product.id} >{product.name}</option>
                        ))}
                        
                   </select>
                </div>
                <div>
                    <input type="number" 
                    placeholder="Enter product quantity"
                    className="border border-black"
                    name="quantity"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <button className="border border-black">Make Sale</button>
                </div>
            </form>

        </div>
    )
}
export default SalesForm;