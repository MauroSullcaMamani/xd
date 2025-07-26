import { Routes } from '@angular/router';
import { ProductoCreate } from './componentes/producto-create/producto-create';
import { ProductoEdit } from './componentes/producto-edit/producto-edit';
import { ProductoList } from './componentes/producto-list/producto-list';
import { Home } from './componentes/home/home';
import { Login } from './componentes/login/login';
import { Register } from './componentes/register/register';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    // --- RUTA PÚBLICA ---
    // La única ruta principal que un usuario no autenticado puede visitar.
    { 
        path: 'login', 
        component: Login 
    },

    // --- RUTAS PRIVADAS (PROTEGIDAS POR EL GUARDIÁN) ---
    // Todas estas rutas requieren que el usuario esté autenticado.
    { 
        path: 'home', 
        component: Home, 
        canActivate: [authGuard]
    },
    { 
        path: 'productos', 
        component: ProductoList, 
        canActivate: [authGuard]
    },
    { 
        path: 'productos/nuevo', 
        component: ProductoCreate, 
        canActivate: [authGuard]
    },
    { 
        path: 'productos/editar/:id', 
        component: ProductoEdit, 
        canActivate: [authGuard]
    },
    // La ruta de registro también está protegida. Solo un usuario
    // logueado (y con el rol correcto, validado en el backend) puede usarla.
    { 
        path: 'register-user', 
        component: Register, 
        canActivate: [authGuard] 
    },

    // --- REDIRECCIONES (SIEMPRE AL FINAL) ---
    // Si un usuario entra a la raíz de la web (''), redirígelo a '/home'.
    // El 'authGuard' de '/home' se encargará de enviarlo a '/login' si no está autenticado.
    { 
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full' 
    },
    // Si un usuario escribe una URL que no existe, también lo mandamos a '/home'
    // para que el guardián decida qué hacer.
    { 
        path: '**', 
        redirectTo: '/home' 
    }
];
