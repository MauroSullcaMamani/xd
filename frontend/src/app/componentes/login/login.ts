import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  isReadyToLogin = false;
  
  private fb = inject(FormBuilder);
  private authService = inject(Auth);

  constructor() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.authService.getCsrfToken().subscribe({
      next: () => {
        console.log('Petición para obtener CSRF completada.');
        this.isReadyToLogin = true;
      },
      error: err => {
        console.error('CRÍTICO: No se pudo obtener la cookie CSRF del backend.', err);
        this.errorMessage = 'No se puede conectar con el servidor. Inténtelo más tarde.';
      }
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid || !this.isReadyToLogin) {
      return;
    }
    this.errorMessage = null;
    this.authService.login(this.loginForm.value).subscribe({
      error: (err) => {
        this.errorMessage = err.error.detail || 'Ocurrió un error al iniciar sesión.';
      }
    });
  }
}
