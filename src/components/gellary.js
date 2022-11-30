import React from "react";
import './title.css';

function Gellary() {
    let image = ["./images/img-1.jpeg","./images/img-2.jpeg","./images/img-3.jpeg","./images/img-4.jpeg"];

    return(
        <div className="gallery">
            {
                image.map((image) => {
                    return(
                        <div className="items">
                            <img src={image} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Gellary;