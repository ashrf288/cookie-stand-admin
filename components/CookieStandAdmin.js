
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import React, { useState , useEffect  } from 'react'
export default function CookieStandAdmin() {
    const [stands, setstands] = useState([])
    let updateStand=(data)=>{
        
      setstands([...stands,data])
    }
    return (
        <div className=" bg-green-100 flex flex-col items-center min-h-screen py-2">
        <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-green-100 align-middle w-screen  ">
          <Header />
          <Main data={stands} updateStand={updateStand} />
        </main>
       <Footer   reports={stands}/>
  
      </div>
    )
}
