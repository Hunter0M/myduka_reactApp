import React from 'react'
import SalesForm from '../components/SalesForm'
import SalesTable from '../components/SalesTable'
const Sales = () => {
  return (
    <div>
        <h3>
            This the Sales page
        </h3>
        
        <div>
            <SalesForm/>
            <SalesTable/>
        </div>
        
      
    </div>
  )
}

export default Sales
