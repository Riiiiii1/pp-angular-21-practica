import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl,ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLinkActive, RouterLink, Router } from "@angular/router";
import { passwordMatchValidator } from './validators/password-match.validator';
import { emailUniqueValidator } from './validators/email-unique.validator';

@Component({
  selector: 'app-signup-page',
  imports: [ReactiveFormsModule, RouterLinkActive, RouterLink],
  templateUrl: './signup-page.html'
})
export class SignupPage {


  constructor(private router: Router ){

  }
/*   emailControl = new FormControl (
    '',
    [Validators.required, Validators.email]
  )

  get email (){
    return this.emailControl;
  }
 */

  private fb = inject(FormBuilder);
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email], [emailUniqueValidator()]],
    password: ['', [Validators.required, Validators.minLength(9)]],
    confirmPassword: ['', [Validators.minLength(9)]],
  }, {validators: passwordMatchValidator});
  get email (){
    return this.form.get('email')
  }
  get password(){
    return this.form.get('password')
  }
  get confirmPassword (){
    return this.form.get('confirmPassword')
  }
onSubmit() {
  if (this.form.invalid) {
    // Marcar todos los campos como touched para mostrar errores
    this.form.markAllAsTouched();

    return;
  }

  console.log('Datos del formulario:', this.form.value);
  
  // Por ahora, navegar a home
  this.router.navigate(['/']);
}
}
