import { addCommonButtons } from "../../controllers/commonBtn";

export function home(){
    const h1 = document.createElement('h1');
    h1.textContent = 'Home';
    document.body.appendChild(h1);
    addCommonButtons();
}