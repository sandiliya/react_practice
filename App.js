const heading = React.createElement(
    "h1", 
    {id: "headings", xyz: "objects" }, 
    "Hello Europe from React...!"
);

//console.log(heading);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);