import { navigateTo } from "./router";
import Swal from 'sweetalert2';


export function index(){
    const form = document.getElementById('form') as HTMLFormElement;
    const name = document.getElementById('name') as HTMLInputElement;
    const lastName = document.getElementById('lastName') as HTMLInputElement;
    
    form.addEventListener('submit',(e:Event)=>{
        e.preventDefault();
        if( name.value && lastName.value){ //si el formulario y los inputs existen
            localStorage.setItem('name',name.value);
            localStorage.setItem('lastName',lastName.value);
            navigateTo('/home');
        } else {
            Swal.fire({
                title: "Both name and last name fields are required.",
                width: 600,
                padding: "3em",
                color: "#716add",
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/public/assets/images/7VE.gif")
                  left top
                  no-repeat
                `
            });
        };
    })
}
