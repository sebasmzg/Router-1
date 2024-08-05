import {home } from '../views/home/home';
import {about } from '../views/about/about';
import {contact } from '../views/contact/contact';
import {notFound } from '../views/notFound/notFound';
import { index } from '../main';

export const routes = {
    public: [ //rutas publicas que no requieren autenticacion
        {path: '/home', component: home},
        {path: '/about', component: about},
        {path: '/contact', component: contact},
        {path: '/notFound', component: notFound},
        {path: '/', component: index}
    ]
}

//path es la ruta de la pagina
//component es una funcion que renderiza la vista. Cada vista es un modulo que exporta una funcion que renderiza la vista.
//component: archivo.ts