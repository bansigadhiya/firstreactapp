import React from "react";
import "../components/Header-2.css"

function Header2(props) {
    console.log(props);
    function Menuitem() {
        let arr=["Search","Shop"];

        arr.map((a) => {
            // console.log(a);
            return(
                <div className="menu">
                    <ul>
                        <li>
                            <a href="#">{a}</a>   
                        </li>
                    </ul>
                </div>   
            )
        })
        
        return(arr)
    }
    

    return(
        <header>
             <div className="container">
                <div className="row align-items justify-content-between">
                    <div className="logo">
                        <img src="images/logo4.png"></img>
                    </div>
                    <div className="menu">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Pages<i class="fa-solid fa-chevron-down"></i></a>
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li>
                                                <a href="#">Page-1</a>
                                            </li>
                                            <li>
                                                <a href="#">Page-2</a>
                                            </li>
                                            <li>
                                                <a href="#">Page-3</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                </li>
                                <li>
                                    <a href="#">{Menuitem()}</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
             </div>
        </header>
       
    )
}


export default Header2;
// export function Menuitem()

