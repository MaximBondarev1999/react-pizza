import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const FullPizaa = () => {
   const [pizza, setPizza] = useState()
   const { id } = useParams()
   const navigate = useNavigate()
   useEffect(() => {
      async function fetchPizza() {
         try {
            const { data } = await axios.get('https://63e7a4f1bb28627977157a40.mockapi.io/items/' + id);
            setPizza(data)
         } catch (error) {
            alert('eror fetch pizaa')
            navigate('/')
         }
      }
      fetchPizza()

   }, [])

   if (!pizza) {
      return <>loading</>
   }
   return (
      <div className='container'>
         <img src={pizza.imageUrl} />
         <h2>{pizza.title}</h2>
         <h4>{pizza.price}  ₴</h4>
      </div>
   )
}

export default FullPizaa
