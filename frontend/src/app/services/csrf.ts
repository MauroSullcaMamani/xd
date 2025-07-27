import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Csrf {
  constructor(private http: HttpClient) {}

  getToken() {
    return this.http.get<{ csrfToken: string }>('http://127.0.0.1:8000/api/csrf/', {
      withCredentials: true
    });
  }
}