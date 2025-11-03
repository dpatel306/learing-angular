import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileInformation } from './user-profile-information/user-profile-information';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone:false
})
export class App {
  protected readonly title = signal('learing-angular');
}
