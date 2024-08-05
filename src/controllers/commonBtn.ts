import { navigateTo } from '../router';
export function addCommonButtons(){
    const aboutBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    const homeBtn = document.createElement('button');
    
    aboutBtn.textContent = 'About';
    contactBtn.textContent = 'Contact';
    homeBtn.textContent = 'Home';
    
    document.body.appendChild(homeBtn);
    document.body.appendChild(aboutBtn);
    document.body.appendChild(contactBtn);

    homeBtn.addEventListener('click', () => {
        navigateTo('/home');
    });
    aboutBtn.addEventListener('click', () => {
        navigateTo('/about');
    });
    contactBtn.addEventListener('click', () => {
        navigateTo('/contact');
    });
}