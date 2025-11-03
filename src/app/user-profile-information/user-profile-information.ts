import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { users } from '../user-list';
import { UserList } from './user-list/user-list';
import { UserProfile } from './user-profile/user-profile';
import { UserType } from './user.model';

@Component({
  selector: 'app-user-profile-information',
  imports: [ButtonModule, UserList, UserProfile],
  templateUrl: './user-profile-information.html',
  styleUrl: './user-profile-information.scss',
})
export class UserProfileInformation {
  userList: UserType[] = users;
  selectedUserInfo?: UserType= this.userList[0];

  onSelect(userId: number) {
    this.selectedUserInfo = this.userList.find((user) => user.id === userId);
  }
}
