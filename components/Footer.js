import React from 'react'
import Link from "next/link";  
export default function Footer(props) {
    return (
        <footer className=" bg-green-500  w-screen p-0  bottom-0  font-bold  h-12 flex items-start  ">
        {" "}
        <h4 className="p-3">{props.reports.length} Locations World Wide</h4>
      </footer>
    )
}
