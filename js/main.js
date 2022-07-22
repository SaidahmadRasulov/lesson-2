const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
const image = "./images/pokemon_logo 1.png";
const imageP = "./images/004 1.png";

const navbar = React.createElement("div", {className: "title-under-content"}, [
    React.createElement("select", {className: "select", id: "select"}, [
        React.createElement("option", {value: "Add", className: "option"}, "Add"),
        React.createElement("option", {value: "Remove", className: "option"}, "Remove"),
    ]),
    React.createElement('input', {type: "search", className: "input", placeholder: "Search..."}),
    React.createElement("select", {className: "select", id: "select"}, [
        React.createElement("option", {value: "Aa Zz", className: "option"}, "Aa Zz"),
        React.createElement("option", {value: "Remove", className: "option"}, "Remove"),
    ]),
    React.createElement("button", {className: "btn"}, "Button"),
]);

const cardheader = React.createElement("div", {className: "card-header"}, [
    React.createElement("img", {src: imageP, className: "card-image", alt: "pokemon"}),
]);

const cardbodyContent = React.createElement("div", {className: "card-body-content"}, [
    React.createElement("h1", {className: "card-body-title"}, "Pokemons"), 
    React.createElement("p", {className: "card-body-text"}, "Grass, Poison"),
])

const cardbody = React.createElement("div", {className: "card-body"}, [
    cardbodyContent,
    React.createElement("i", {className: "bi bi-github"})
])

const cardFooter = React.createElement("div", {className: "card-footer"}, [
    React.createElement("p", {className: "card-footer-text"}, "6.9 kg"),
    React.createElement("p", {className: "card-footer-text"}, "99 age"),
])

const content = React.createElement("div", {className: "content"}, [
    React.createElement("div", {className: "card"}, [
        cardheader, cardbody, cardFooter
    ]),
    React.createElement("div", {className: "card"}, [
        cardheader, cardbody, cardFooter
    ]),
    React.createElement("div", {className: "card"}, [
        cardheader, cardbody, cardFooter
    ]),
    React.createElement("div", {className: "card"}, [
        cardheader, cardbody, cardFooter
    ]),
    React.createElement("div", {className: "card"}, [
        cardheader, cardbody, cardFooter
    ]),
    React.createElement("div", {className: "card"}, [
        cardheader, cardbody, cardFooter
    ]),
    React.createElement("div", {className: "card"}, [
        cardheader, cardbody, cardFooter
    ]),
    React.createElement("div", {className: "card"}, [
        cardheader, cardbody, cardFooter
    ]),
]);

const logo = React.createElement("img", {src: image, alt: "pokemon-logo", className: "img"});

const readyContent = React.createElement("div", {className: "container"}, [
    logo, navbar
])

const contentFluid = React.createElement("div", {className: "container-fluid"}, [
    readyContent, content
]);

root.render(contentFluid);