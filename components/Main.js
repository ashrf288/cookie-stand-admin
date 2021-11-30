
import React, { useState , useEffect  } from 'react';
export default function Main() {
    const [location, setlocation] = useState('')
    const [MinCustomer, setMinCustomer] = useState(0)
    const [average, setaverage] = useState(0)
    const [MaxCustomer, setMaxCustomer] = useState(0)
    const [stands, setstands] = useState([])
    let clickHandler=(e)=>{
      e.preventDefault()
     let stand={
    average:average,
    location:location,
    MinCustomer:MinCustomer,
    MaxCustomer:MaxCustomer
      }
      setstands([...stands,stand])
     console.log(stands)
    }
    return (
        <div className=' my-36'>
        <form className="bg-green-400 flex flex-col   w-4/5 p-4    m-auto  place-items-center  gap-5 rounded-lg  ">
          <h2 className=" text-black  p-4  "> Create Cookie Stand</h2>
          <div className="items-stretch w-full">
            <label>location : </label>
            <input 
             value={location}
             onChange={(e) => setlocation(e.target.value)}
             name='location' className="w-4/5 m-2" placeholder="Barcelona"></input>
            <br />
          </div>
          <div className="flex place-items-center ">
            <div>
              <label className="content-center mx-7">
                Minimum Customers per Hour :{" "}
              </label>
              <input
                 value={MinCustomer}
                 onChange={(e) => setMinCustomer(e.target.value)}
                 name='MinCustomer'
                placeholder="2"
                type="number"
                className="m-2 w-4/5   "
              ></input>
              <br />
            </div>
            <div>
              <label className="content-center mx-7">
                Maximum Customers per Hour :{" "}
              </label>
              <input
                value={MaxCustomer}
                onChange={(e) => setMaxCustomer(e.target.value)}
                name='MaxCustomer'
                placeholder="4"
                type="number"
                className="m-2 w-4/5"
              ></input>
              <br />
            </div>
            <div>
              <label className="content-center mx-7">
                Average Cookie per Sale :{" "}
              </label>
              <input
                value={average}
                onChange={(e) => setaverage(e.target.value)}
                name='avergae'
                placeholder="2.5"
                type="number"
                className="m-2 w-4/5 "
              ></input>
              <br />
            </div>
            <button className="bg-green-600 p-4 w-1/5" onClick={(e)=>clickHandler(e)}> Create</button>
          </div>
        </form>
        
        <section  className='mt-4 text-center'>
      {stands.map((stand,index)=>{
            return <p key={index} >{JSON.stringify(stand)}</p>
          })}
      </section>
      </div>
    )
}
