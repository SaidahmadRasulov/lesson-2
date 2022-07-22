const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
const image = "./images/pokemon_logo 1.png";
const imageP = "./images/004 1.png";

const navbar = React.createElement("div", {className: "title-under-content"}, [
    React.createElement("select", {className: "input", id: "select"}, [
        React.createElement("option", {value: "Add", className: "option"}, "Add"),
        React.createElement("option", {value: "Remove", className: "option"}, "Remove"),
    ]),
    React.createElement('input', {type: "text", className: "example"}),
    React.createElement("h1", {className: "title"}, "Pokédex"),
    React.createElement("h1", {className: "title"}, "Pokédex"),
]);

const cardheader = React.createElement("div", {className: "card-header"}, [
    React.createElement("img", {src: imageP, className: "card-image", alt: "pokemon"}),
]);

const content = React.createElement("div", {className: "content"}, [
    React.createElement("div", {className: "card"}, [
        cardheader
    ]),
]);


const readyContent = React.createElement("div", {className: "container"}, [
    React.createElement("img", {src: image, alt: "pokemon-logo", className: "img"}),
    navbar, content
])

root.render(readyContent);