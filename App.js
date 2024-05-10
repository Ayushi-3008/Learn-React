import React from "react";
import ReactDOM from "react-dom/client";

/**
 * FOOD APP:
 * Header
 *    - Logo
 *    - Nav Items
 * Body
 *    - Search Input
 *    - Card
 *      - Image
 *      - Names, star Rating, cuisine, delivery time
 * Footer
 *    - Copyright
 *    - Links
 *    - Address
 *    - Contact
 */
// React.createElement => ReactDOM(Object) => HTML Element
// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => React.createElement => ReactDOM(Object) => HTML Element
const resObj = [{
    name:"SharkInn",
    star:"4.4",
    time:"38min",
    cuisine:"Chinese, North Indian",
},{
    name:"KFC",
    star:"4.4",
    time:"38min",
    cuisine:"Chinese, North Indian",
},{
    name:"ICH",
    star:"4.4",
    time:"38min",
    cuisine:"Chinese, North Indian",
},{
    name:"Dominos",
    star:"4.4",
    time:"38min",
    cuisine:"Chinese, North Indian",
}]
const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burgerwith-lettuce-3624ld.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
}

const ResturantCard = (props) => {
    const {resData} = props;
    return (
        <div className="resturant-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="card-image" 
                alt="shark-inn" 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf">
            </img>
            <h3>{resData.name}</h3>
            <h4>{resData.cuisine}</h4>
            <h4>{resData.star}</h4>
            <h4>{resData.time}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="resturant-container">
                {resObj.map((res, index) => {
                    return <ResturantCard key={index} resData={res}/>
                })}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            {/* Footer */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)
