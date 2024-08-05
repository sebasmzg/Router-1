import { routes } from "./helpers/routes";
//router function
export function router(){
    const path = window.location.pathname; //obtener la ruta actual
    const publicRoute = routes.public.find(route => route.path === path); //buscar la ruta en las rutas publicas
    if(!publicRoute && path !== '/'){ //si la ruta no existe y no es la raiz
        navigateTo('/notFound'); //redirigir a notFound
        return; //terminar la ejecucion
    }
    
    publicRoute?.component(); //ejecutar la funcion de la ruta. component es una funcion que renderiza la vista
       
}
//funcion para navegar a una ruta
export function navigateTo(path: string):void{  //recibe un string con la ruta
    window.history.pushState({},'',window.location.origin+path); //cambiar la ruta en la url pushState(state, title, url) pushstate es una funcion que cambia la ruta en la url sin recargar la pagina
    document.body.innerHTML = ''; //limpiar el body
    router(); //llamar
}

//inicializar router en popstate
window.addEventListener('popstate',router); //popstate es un evento que se dispara cuando se cambia la ruta en la url. popstate hace referencia a la accion de retroceder o avanzar en la historia del navegador
//llamar router cuando carga la pagina
document.addEventListener('DOMContentLoaded',router); //al cargar la pagina llamar router