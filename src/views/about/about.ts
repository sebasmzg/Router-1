import { addCommonButtons } from "../../controllers/commonBtn";

export function about (){
    const h1 = document.createElement('h1');
    h1.textContent = 'About us';
    document.body.appendChild(h1);
    addCommonButtons();
}