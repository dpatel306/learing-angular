import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

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
  ngOnInit(){
    if(!!this.usersData && !!this.usersData[0].id){
      this.onSelectUser(this.usersData[0].id);
    }
  }

}