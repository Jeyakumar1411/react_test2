import React, { useState } from 'react'
import axios from 'axios'

const AxiosPost = () => {

    const [username, setUsername] = useState('')
    const [customer_name, setCustomer_name ] = useState('')
    const [age, setAge] = useState('')

  const submitHandler = event => {
    event.preventDefault()

    const data = {
      username : username,
      customer_name : customer_name,
      age : age
    }

    axios.post('http://127.0.0.1:8000/test/post', data)
        .then(response =>{
            setUsername('')
            setCustomer_name('')
            setAge('')
        })
        .catch(error => console.log(error))



  }

  return (
    <div className='center'>
            <form onSubmit={submitHandler}>

                <div className='txt_field'>
                    
                    {/* <label htmlFor="username">Username:</label> */}
                    <span/>
                    <input type="text" name="username" id="username" placeholder='Username' value={username} onChange={event => setUsername(event.target.value)} />
                </div>

                <div className='txt_field'>
                    {/* <label htmlFor="Customer_name">Customer Name:</label> */}
                    <span/>
                    <input type="text" name="customer_name" id="customer_name" placeholder='Customer Name' value={customer_name} onChange={event => setCustomer_name(event.target.value)} />
                </div>

                <div className='txt_field'>
                    {/* <label htmlFor="age">Age:</label> */}
                    <span/>
                    <input type="text" name="age" id="age" placeholder='Age' value={age} onChange={event => setAge(event.target.value)} />
                </div>

                <div>
                    <input type="submit" />
                </div>

                </form>
      </div>
  )
}

export default AxiosPost