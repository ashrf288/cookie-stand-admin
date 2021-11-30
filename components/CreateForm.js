import React, { useState , useEffect  } from 'react';

export default function CreateForm(props) {
    let onCreate=(e)=>{
        e.preventDefault()
       let stand={
      location:e.target.location.value,
      average:e.target.avergae.value,
      MinCustomer:e.target.MinCustomer.value,
      MaxCustomer:e.target.MaxCustomer.value,
      hourly_sales:[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
        }
        props.updateStand(stand)
      }
    return (
        <form onSubmit={e=>onCreate(e)} className="bg-green-400 flex flex-col   w-4/5 p-4    m-auto  place-items-center  gap-5 rounded-lg  ">
        <h2 className=" text-black  p-4  "> Create Cookie Stand</h2>
        <div className="items-stretch w-full">
          <label>location : </label>
          <input 
           name='location' className="w-4/5 m-2" placeholder="Barcelona"></input>
          <br />
        </div >
        <div className="flex place-items-center gap-3   ">
          <div className='bg-green-200 rounded-lg '>
            <label className="content-center mx-7">
              Minimum Customers per Hour :{" "}
            </label>
            <input
               name='MinCustomer'
              placeholder="2"
              type="number"
              className="m-2 w-4/5   "
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
              className="m-2 w-4/5"
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
              className="m-2 w-4/5 "
              min='0'
            ></input>
            <br />
          </div>
          <button className="bg-green-600 p-4 w-1/5 rounded-lg"type='submit' > Create</button>
        </div>
      </form>
      
    )
}
