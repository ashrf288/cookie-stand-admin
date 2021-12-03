import React, { useState , useEffect  } from 'react';
import useResource  from '../hooks.js/useResource';


export default function CreateForm(props) {
  const {createResource , fetchResource} = useResource()
    let onCreate=(e)=>{
        e.preventDefault()
       let stand={
      location:e.target.location.value,
      average:e.target.avergae.value,
      MinCustomer:e.target.MinCustomer.value,
      MaxCustomer:e.target.MaxCustomer.value,
      hourly_sales:[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36 ,516]
        }
        props.updateStand(stand)
        createResource(stand)
      }
    return (
        <form onSubmit={e=>onCreate(e)} className="flex flex-col w-4/5 gap-5 p-4 m-auto bg-green-400 rounded-lg place-items-center ">
        <h2 className="p-4 text-black "> Create Cookie Stand</h2>
        <div className="items-stretch w-full">
          <label>location : </label>
          <input 
           name='location' className="w-4/5 m-2" placeholder="Barcelona"></input>
          <br />
        </div >
        <div className="flex gap-3 place-items-center ">
          <div className='bg-green-200 rounded-lg '>
            <label className="content-center mx-7">
              Minimum Customers per Hour :{" "}
            </label>
            <input
               name='MinCustomer'
              placeholder="2"
              type="number"
              className="w-4/5 m-2 "
              min='0'
            ></input>
            <br />
          </div>
          <div  className='bg-green-200 rounded-lg '>
            <label className="content-center mx-7">
              Maximum Customers per Hour :{" "}
            </label>
            <input
              name='MaxCustomer'
              placeholder="4"
              type="number"
              className="w-4/5 m-2"
              min='0'
            ></input>
            <br />
          </div>
          <div className='bg-green-200 rounded-lg '>
            <label className="content-center mx-7">
              Average Cookie per Sale :{" "}
            </label>
            <input
              name='avergae'
              placeholder="2.5"
              type="number"
              className="w-4/5 m-2 "
              min='0'
            ></input>
            <br />
          </div>
          <button className="w-1/5 p-4 bg-green-600 rounded-lg"type='submit' > Create</button>
        </div>
      </form>
      
    )
}
