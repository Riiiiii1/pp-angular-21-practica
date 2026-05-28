import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4Pd4r77AuCXjbiE3bO4zc3ZTem5-mspo",
  authDomain: "pp-angular-practt.firebaseapp.com",
  projectId: "pp-angular-practt",
  storageBucket: "pp-angular-practt.firebasestorage.app",
  messagingSenderId: "279044982343",
  appId: "1:279044982343:web:a5cb7c6c2dca99a2edd362"
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
