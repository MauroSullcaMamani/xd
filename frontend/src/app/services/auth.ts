import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, tap, catchError, filter } from 'rxjs'; // filter ya estaba, ¡genial!
import { Router } from '@angular/router';

export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  rol: 'propietario' | 'admin' | 'vendedor';
  last_login: string;
}

@Injectable({
  providedIn: 'root'
})
// El nombre de tu clase es 'Auth', lo mantendremos así.
export class Auth { 
  private http = inject(HttpClient);
  private router = inject(Router);

  private apiUrl = 'https://xd-unt5.onrender.com//api'; 

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  // <-- MODIFICACIÓN 1: Cambiamos el estado inicial a 'null'
  // Esto indica "aún no lo sé", en lugar de "no está autenticado".
  private isAuthenticatedSubject = new BehaviorSubject<boolean | null>(null);
  
  // <-- MODIFICACIÓN 2: Creamos un observable que filtra el 'null'.
  // Los componentes y el guardián solo recibirán 'true' o 'false'.
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable().pipe(
    filter((isAuthenticated): isAuthenticated is boolean => isAuthenticated !== null)
  );

  // <-- MODIFICACIÓN 3: (LA CLAVE) Añadimos un subject para saber cuándo terminó la verificación.
  private authStatusChecked = new BehaviorSubject<boolean>(false);
  public authStatusChecked$ = this.authStatusChecked.asObservable();

  constructor() {
    this.checkAuthenticationStatus();
  }

  getCsrfToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/csrf/`);
  }
  
  checkAuthenticationStatus(): void {
    this.http.get<User>(`${this.apiUrl}/myuser/`).pipe(
      tap(user => {
        if (user) {
          this.currentUserSubject.next(user);
          this.isAuthenticatedSubject.next(true); // Hay usuario
        } else {
            // Si el backend responde 200 pero sin usuario (poco probable pero seguro)
            this.isAuthenticatedSubject.next(false);
        }
      }),
      catchError(() => {
        this.currentUserSubject.next(null);
        this.isAuthenticatedSubject.next(false); // No hay usuario
        return of(null);
      }),
      // <-- MODIFICACIÓN 4: Al final de la petición, sea cual sea el resultado,
      // marcamos la verificación como completada.
      tap(() => this.authStatusChecked.next(true))
    ).subscribe();
  }

  login(credentials: any): Observable<any> {
    // Quitamos { withCredentials: true } de aquí porque ya lo configuraste globalmente en app.config.ts
    return this.http.post(`${this.apiUrl}/login/`, credentials).pipe(
      tap(() => {
        // En lugar de llamar a checkAuthenticationStatus(), actualizamos directamente el estado
        // para una respuesta más rápida.
        this.http.get<User>(`${this.apiUrl}/myuser/`).subscribe(user => {
          this.currentUserSubject.next(user);
          this.isAuthenticatedSubject.next(true); // Se establece a 'true'
          this.router.navigate(['/home']);
        });
      })
    );
  }

  logout(): void {
    this.http.post(`${this.apiUrl}/logout/`, {}).pipe(
      tap(() => this.clearAuthData()),
      catchError(err => {
        console.error('Logout failed', err);
        this.clearAuthData();
        return of(null);
      })
    ).subscribe();
  }
  
  register(userData: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/register/`, userData);
  }

  private clearAuthData(): void {
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false); // Se establece a 'false'
    this.router.navigate(['/login']);
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }
}