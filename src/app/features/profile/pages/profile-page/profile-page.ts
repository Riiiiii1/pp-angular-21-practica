import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../../shared/utils/form-utils';

@Component({
  selector: 'app-profile-page',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;
  profileForm: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(3)]],
    edad: ['0',[Validators.required, Validators.min(18)]],
    email: ['',[Validators.required, Validators.email]],
  });

  get nombre() {
    return this.profileForm.get('nombre');
  }
  get edad() {
    return this.profileForm.get('edad');
  }
  get email() {
    return this.profileForm.get('email');
  }

  onSubmit() {
    if (this.profileForm.invalid) {
      // Marcar todos los campos como tocados para mostrar errores
      this.profileForm.markAllAsTouched();
      return;
    }
    console.log('Datos del formulario:', this.profileForm.value);
  }

}
