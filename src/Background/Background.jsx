import React, { useState } from "react";  
import './Background.css'   

const HexBG = () => {
    const [isHover, setIsHover] = useState(false);
    const rows = 15;
    const hexagonsPerRow = 20;
    
    return (
        <div className="hexagon-container">
            <div className="background">
               
                    <div className="container">
                        {Array(rows).fill().map((_, rowIndex) => (
                            <div key={rowIndex} className="row">
                                {Array(hexagonsPerRow).fill().map((_, hexagonIndex) => (
                                    <div key={hexagonIndex} 
                                        className={`hexagon ${isHover ? "hexagon-hover" : ""}`}
                                        onMouseOver={() => setIsHover(true)}
                                        onMouseOut={() => setIsHover(false)}>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
         
        </div>
    )
}



export default HexBG;
