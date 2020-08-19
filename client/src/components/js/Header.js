import React from "react";
import "../css/Header.css";
import logo from '../../murmur.png'

    class Header extends React.Component{
        render(){
            return (
               <nav className="Nav">
                 <div className="Nav-menus">
                   <div className="Nav-brand">
                     <img className="Nav-brand-logo" src={logo} alt="logo">
                       
                     </img>
                   </div>
                 </div>
               </nav>
           );
        }   
    }
    export default Header;
