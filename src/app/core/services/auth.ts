import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import {  signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { 
  Auth, 
  authState, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut 
} from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService { // <-- Cambiado de 'Auth' a 'AuthService' para evitar conflictos
  private auth = inject(Auth);

  currentUser = toSignal(authState(this.auth));

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  register(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  logout() {
    return from(signOut(this.auth));
  }

  // NUEVO METODO: Inicio de sesión con Google
  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider));
  }

  get uid(): string | null {
    return this.currentUser()?.uid ?? null;
  }
  
}