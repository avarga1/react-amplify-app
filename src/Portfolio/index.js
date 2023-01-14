import React from 'react';
import ReactDOM from 'react-dom';
import MobilePortfolio from './Mobile.jsx';
import DesktopPortfolio from './Desktop.jsx';


function Portfolio() {
    if (window.innerWidth < 800) {
        return <MobilePortfolio />
    } else {
        return(
            <div>
                <h1 className="text-center desktop-only" style={{fontSize: "1.5rem"}}>Hover cursor over site to enlarge </h1>

                <DesktopPortfolio />
            </div>
        )
    }
}


ReactDOM.render(
    <Portfolio />,
    document.getElementById('root')
);

export default Portfolio;