import Image from "next/image";
import React from "react";

const Loading = () =>{
    return(
        <>
        <div className="flex justify-center">
          {/* <img className="h-96" src="spinner.svg" alt="loading..."/> */}
          <Image width={500} height={300} className="h-96" src="spinner.svg" alt="loading..."/>
        </div>
        </>
    )
}


export default Loading;