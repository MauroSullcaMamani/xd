import { HttpInterceptorFn } from '@angular/common/http';

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
}

export const csrfInterceptor: HttpInterceptorFn = (req, next) => {
  // Primero, clonamos la petición para añadirle withCredentials.
  // Esto se aplicará a TODAS las peticiones que pasen por el interceptor.
  const reqWithCredentials = req.clone({
    withCredentials: true
  });

  const csrfToken = getCookie('csrftoken');
  
  // Si no es un GET/HEAD y tenemos un token CSRF, clonamos DE NUEVO
  // la petición (que ya tiene withCredentials) para añadirle la cabecera.
  if (req.method !== 'GET' && req.method !== 'HEAD' && csrfToken) {
    const reqWithCsrf = reqWithCredentials.clone({
      setHeaders: {
        'X-CSRFToken': csrfToken
      }
    });
    return next(reqWithCsrf);
  }

  // Si es un GET o no tenemos token, simplemente enviamos la petición
  // que ya tiene withCredentials.
  return next(reqWithCredentials);
};