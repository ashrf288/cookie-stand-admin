import React from "react";
import Link from "next/link";
import { useAuth } from "../contexts/auth";
export default function Header() {
  const { user, login, logout } = useAuth();
  return (
    <div>
      <header className="absolute top-0 flex justify-between w-screen p-0 font-bold bg-green-500 ">
        <h1 className="p-4 text-4xl text-black ">Cookie Stand Admin</h1>
        <div className='mr-7'>
          <Link href="/overview">
            <button className="self-end p-2 m-4 font-bold bg-gray-400 rounded-lg ">
              overview
            </button>
          </Link>
          {user ? (
            <button
              className="p-2 text-white bg-red-500 rounded"
              onClick={() => logout("", "")}
            >
              logout
            </button>
          ) : (
            <button
              className="p-2 text-white bg-gray-500 rounded"
              onClick={() => login("ash288", "1234")}
            >
              Login
            </button>
          )}
        </div>
      </header>
    </div>
  );
}
