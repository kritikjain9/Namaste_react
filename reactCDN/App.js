const header = React.createElement("h1", {}, "hi from react");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("h1", {}, [header, header]);
root.render(parent);