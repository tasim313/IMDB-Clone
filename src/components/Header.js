import React from "react";
import MenuItem from "./MenuItem";
import DarkModeSwitch from "./DarkModeSwitch";
import {AiFillHome} from "react-icons/ai"
import {BiSolidInfoCircle} from "react-icons/bi"
import Link from "next/link";

const Header = () =>{
    return(
        <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
            <div className="flex">
              <MenuItem title={"HOME"} address={"/"} Icon={AiFillHome}></MenuItem>
              <MenuItem title={"ABOUT"} address={"/about"} Icon={BiSolidInfoCircle}></MenuItem>
            </div>
            <div className="flex items-center space-x-5">
                <DarkModeSwitch />
                 <Link href="/">
                    <h2 className="text-2xl">
                        <span className="font-bold bg-yellow-500 py-1 px-2 rounded-lg mr-1">
                          IMDb
                        </span>
                        <span className="text-xl hidden sm:inline">
                          Clone
                        </span>
                    </h2>
                 </Link>
            </div>
        </div>
    )
}


export default Header;