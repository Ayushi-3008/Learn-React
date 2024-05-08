import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactDOM(Object) => HTML Element
// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => React.createElement => ReactDOM(Object) => HTML Element
const elem = <span>React Element</span>

const heading = (
    <h1 className="heading" tabIndex="5">
        {elem}
        Learn React using JSX
    </h1>
)

// React Functional Component
const HeadingComponent = () => (
    <div id="container">
        {heading}
        <h1 id="heading">React functional component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />)
