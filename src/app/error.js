"use client"

import React from "react";
import { useEffect } from "react";

const Error = ({ error, reset }) =>{
    
    useEffect(() =>{

        console.log(error)

    }, [error]);
    
    return(
        <>
        <div className="text-center mt-10">
            <h2>Something went wrong</h2>
            <button className="hover:text-yellow-500" onClick={() => reset()}>Try Again</button>
        </div>
        </>
    )
}

export default Error