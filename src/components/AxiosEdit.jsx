import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const AxiosEdit = () => {

    const navigate = useNavigate()

    const params = useParams()
    const {userid} = params

    const [customer_name, setCustomerName] = useState('')
    const [ username, setUserName] = useState('')
    const [ age, setAge] = useState('')

    useEffect(() => {
        axios.post(`http://127.0.0.1:8000/test/post/${userid}`)
        .then(response =>{
            setCustomerName(response.data.customer_name)
            setUserName(response.data.username)
            setAge(response.data.age)
        })
    })
    .catch(error => console.log(error))

    const deleteCustomer = (event) => {

        axios.post(`http://127.0.0.1:8000/test/post/${userid}`)
        .then(response => navigate('/'))
        .catch(error => console.log(error))

    }
  return (
    <div>
        <form>

            <div className='txt_field'>
                
                {/* <label htmlFor="username">Username:</label> */}
                <span/>
                <input type="text" name="username" id="username" placeholder='Username' value={username} onChange={event => setUserName(event.target.value)} />
            </div>

            <div className='txt_field'>
                {/* <label htmlFor="Customer_name">Customer Name:</label> */}
                <span/>
                <input type="text" name="customer_name" id="customer_name" placeholder='Customer Name' value={customer_name} onChange={event => setCustomerName(event.target.value)} />
            </div>

            <div className='txt_field'>
                {/* <label htmlFor="age">Age:</label> */}
                <span/>
                <input type="text" name="age" id="age" placeholder='Age' value={age} onChange={event => setAge(event.target.value)} />
            </div>

            <div>
                <input type="button" value="Update" />
                <input type="button" value="Delete" onClick={() => deleteCustomer()} />
            </div>

        </form>
    </div>
  )
}

export default AxiosEdit