import { Injectable, signal } from '@angular/core';

export type aviableLocales = 'es' | 'fr' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private currentLocale = signal<aviableLocales>('es');

  constructor() {
    // Initialize with a default locale
    this.currentLocale.set(
      localStorage.getItem('locale') as aviableLocales || 'es'
    );
  }

  getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: aviableLocales) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
