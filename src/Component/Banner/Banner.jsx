import { React, useState } from "react";
import Logo from "../../assets/Logo.png";
import Provig from "../../assets/Provig mas slogan.png";

import "./Banner.css"
export default function Banner() {  
    
    return (
        <div className="Container">
            <div className="Container--Rigth">
            <img className="Container--Rigth-1" src={Logo}alt="" />
            <img className="Container--Rigth-2" src={Provig}alt="" />            
            </div>           

            <div>
            <img src=""alt="Face" />
            <img src=""alt="Insta" />
            </div>
        </div>
    )
}
