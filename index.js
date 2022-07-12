import baseConnecting from "./baseProcess.js";
import inputName from "./inputName.js";
import inputAge from "./inputAge.js";
import container from "./formInit.js";

const btn = document.createElement("input");
btn.type = "submit";
btn.value = "Save";
btn.className = "save-button";
const list = document.createElement("div");
list.className = "display";
container.append("Name:", inputName, "Age:", inputAge, btn, list);
btn.addEventListener('click', () => baseConnecting(inputName, inputAge));

export default list