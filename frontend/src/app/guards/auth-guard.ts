import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// Asegúrate de importar los operadores de RxJS que necesitas
import { filter, map, switchMap, take } from 'rxjs/operators';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = (route, state): Observable<boolean | UrlTree> => {
  const authService = inject(Auth);
  const router = inject(Router);

  // --- NUEVA LÓGICA ---

  // 1. Nos suscribimos a 'authStatusChecked$'. Este observable solo emitirá 'true'
  //    cuando la verificación inicial en el servicio haya terminado.
  return authService.authStatusChecked$.pipe(
    // El operador 'filter' detendrá el flujo hasta que el valor sea 'true'.
    filter(isChecked => isChecked === true),
    
    // 'take(1)' se asegura de que este flujo solo se ejecute una vez por cada
    // intento de activación de la ruta.
    take(1),
    
    // 2. 'switchMap' nos cambia a un nuevo observable. Una vez que la comprobación ha
    //    terminado, ahora sí nos suscribimos a 'isAuthenticated$' para obtener el
    //    estado de autenticación definitivo.
    switchMap(() => {
      return authService.isAuthenticated$.pipe(take(1));
    }),
    
    // 3. 'map' toma el valor de 'isAuthenticated$' (que ahora es el correcto)
    //    y decide si permite el paso o redirige.
    map(isAuthenticated => {
      if (isAuthenticated) {
        return true; // ¡Acceso concedido!
      } else {
        // El usuario definitivamente no está autenticado, redirigimos a login.
        return router.createUrlTree(['/login']);
      }
    })
  );
};