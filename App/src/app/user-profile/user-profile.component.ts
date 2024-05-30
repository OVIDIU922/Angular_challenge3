import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from './modéle-de-user/user.modéle';


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user: User = new User();

  toggleAge(): void {
    this.user.age = this.user.age;
  }

  showAge = true;

  toggleAgeVisibility() {
    this.showAge = !this.showAge;
  }
}


