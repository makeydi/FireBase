import inputName from './inputName.js';
import inputAge from './inputAge.js';
import container from './formInit.js';
import baseConnecting from "./baseProcess.js";

const btn = document.createElement('button');
const list = document.createElement('div');
btn.innerHTML = 'Save';
btn.className = 'save-button';
list.className = 'display';
container.append('Name:', inputName, 'Age:', inputAge, btn, list);
btn.addEventListener('click', () => baseConnecting(inputName, inputAge));