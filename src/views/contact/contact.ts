import { addCommonButtons } from "../../controllers/commonBtn";
export function contact(){
    const h1 = document.createElement('h1');
    h1.textContent = 'Contacts';
    document.body.appendChild(h1);
    addCommonButtons();
}