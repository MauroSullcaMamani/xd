import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Auth } from '../../services/auth';

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirms = control.get('confirms');

  if (!password || !confirms || !confirms.value) {
    return null;
  }
  
  return password.value === confirms.value ? null : { mismatch: true };
};

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register implements OnInit, OnDestroy {
  registerForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  
  private fb = inject(FormBuilder);
  private authService = inject(Auth);
  private passwordSubscription: Subscription | undefined;

  constructor() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      rol: ['vendedor', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirms: ['', Validators.required]
    }, { 
      validators: passwordMatchValidator 
    });
  }

  ngOnInit(): void {
    const confirmsControl = this.registerForm.get('confirms');
    if (confirmsControl) {
      this.passwordSubscription = confirmsControl.valueChanges.subscribe(() => {
        this.registerForm.get('password')?.updateValueAndValidity();
      });
    }
  }

  ngOnDestroy(): void {
    this.passwordSubscription?.unsubscribe();
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
        if (this.registerForm.errors?.['mismatch']) {
            // Este console.error es útil para depurar si el validador del frontend está funcionando.
            console.error('Error de validación del frontend: Las contraseñas no coinciden.');
        }
        return;
    }
    
    this.successMessage = null;
    this.errorMessage = null;

    // --- CORRECCIÓN AQUÍ ---
    // Eliminamos la línea que excluía 'confirms'.
    // Ahora enviamos el objeto completo del formulario.
    this.authService.register(this.registerForm.value).subscribe({
      next: (res) => {
        this.successMessage = res.detail || 'Usuario creado exitosamente.';
        this.registerForm.reset({ rol: 'vendedor' });
      },
      error: (err) => {
        // El mensaje de error ahora vendrá correctamente del backend si las contraseñas no coinciden.
        this.errorMessage = err.error.detail || 'Ocurrió un error al registrar el usuario.';
      }
    });
  }
}