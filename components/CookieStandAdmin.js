import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm.js"
import useResource, {createResource} from '../hooks.js/useResource';
import { useAuth } from '../contexts/auth'

export default function CookieStandAdmin() {
  const [stands, setstands] = useState([]);
  const { user, login } = useAuth();
  let updateStand = (data) => {
    setstands([...stands, data]);
  };
  return (
    <div className="flex flex-col items-center min-h-screen py-2 bg-green-100 ">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen align-middle bg-green-100 ">
      
        <Header />
        {user ? (
             <Main data={stands} updateStand={updateStand} />
        ) : (
          <div className='m-auto mx-12 my-64 font-bold text-center'>
             <LoginForm/>        
          </div>

        )}
      </main>
      <Footer reports={stands} />
    </div>
  );
}
