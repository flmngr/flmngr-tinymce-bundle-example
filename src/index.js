import * as editor from './editor';

const heading = () => {
    const element = document.createElement('h1');
    element.innerText = 'TinyMCE + Flmngr file manager Webpack demo';
    return element;
};

const editorArea = () => {
    const element = document.createElement('textarea');
    element.id = 'editor';
    return element;
};

const style = document.createElement("style");
style.innerHTML = ".tox-promotion {display: none !important; }";
document.body.appendChild(style);

const parent = document.createElement('p');
parent.appendChild(editorArea());
document.body.appendChild(heading());
document.body.appendChild(parent);

editor.render();