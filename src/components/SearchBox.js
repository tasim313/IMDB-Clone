"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () =>{

    const [search, setSearch] = useState("")
    const router = useRouter();

    const handelSubmit =(e) =>{
        e.preventDefault();
        if(!search){
          return
        }
        router.push(`/search/${search}`)
    }

    return(
        <>
        <div>
            <form className="flex max-w-6xl mx-auto justify-between items-center px-5" onSubmit={handelSubmit}>
                <input type="text" placeholder="Search Keywords..." className="w-full h-14 rounded-sm placeholder-gary-500 outline-none bg-transparent flex-1" onChange={(e) => setSearch(e.target.value)}
                />
                <button disabled={!search} type="submit" className="text-yellow-500 disable:text-gray-400"> Search </button>
            </form>
        </div>
        </>
    )
}


export default SearchBox;