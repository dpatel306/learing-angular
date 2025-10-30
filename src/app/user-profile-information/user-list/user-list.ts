import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  @Input({required:true}) usersData!: any;
  @Output() selectedUser = new EventEmitter<number>();
  selectedUserId = 0;
  onSelectUser(userId: number) {
    console.log('selected user ',userId);
    this.selectedUserId = userId;
    this.selectedUser.emit(userId);
  }

}