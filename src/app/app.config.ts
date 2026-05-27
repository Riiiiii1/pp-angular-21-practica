import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCpysKUBlNRkEAbyjQhFRAaskBa4Zp-WO8",
  authDomain: "nodejestucuentaabierta.firebaseapp.com",
  projectId: "nodejestucuentaabierta",
  storageBucket: "nodejestucuentaabierta.firebasestorage.app",
  messagingSenderId: "752214676355",
  appId: "1:752214676355:web:9322c03832d12feda2dcb6",
  measurementId: "G-XQX0WNSNG7"
};






export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch())
  ]
};
