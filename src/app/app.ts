import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileInformation } from './user-profile-information/user-profile-information';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserProfileInformation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('learing-angular');
}
