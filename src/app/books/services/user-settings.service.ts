import { Injectable } from '@angular/core';
import { ApplicationSettings } from '@nativescript/core';

@Injectable({ providedIn: 'root' })
export class UserSettingsService {
  private readonly key = 'bookpulse.username';

  getUsername(): string {
    return ApplicationSettings.getString(this.key, 'Estudiante');
  }

  saveUsername(name: string): void {
    ApplicationSettings.setString(this.key, name.trim() || 'Estudiante');
  }
}