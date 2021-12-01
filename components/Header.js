import React from "react";
import Link from "next/link";     
  
export default function Header() {
  return (
    <div>

      <header className=" flex bg-green-500  w-screen p-0 absolute top-0  font-bold justify-between	">
        <h1 className=" text-black text-4xl p-4 ">Cookie Stand Admin</h1>
        <Link href='/overview' > 
        <button className='bg-gray-400 m-4 rounded-lg p-2 font-bold self-end '>overview</button>
       </Link>
      </header>
    </div>
  );
}
