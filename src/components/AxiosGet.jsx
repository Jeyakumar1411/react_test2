import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { CustomerRender } from './CustomerRender';

const AxiosGet = () => {

    const [customer_data, setCustomer_data] = useState([])

    useEffect(() => {
        
        axios.get('http://127.0.0.1:8000/test/post')
        .then(response => setCustomer_data(response.data))
        .then(response => console.log(response.data))
        
        .catch(error => console.log(error))
    }, [])
    
    
    
    let render_data = customer_data.length > 0 ? customer_data.map(customer => <CustomerRender key={customer.id} customer={customer}/>) : <div style={{color: 'red'}}><tr>Data not Found!</tr></div>

  return (
            <div className='filter'>
                <table >
                    <thead className='th'>
                        <td>Username</td>
                        <td>Customer Name</td>
                        <td>Customer Age</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </thead>
                    <tbody >
                        {render_data}
                    </tbody>
                </table>
                
            </div>
  )
}

export default AxiosGet