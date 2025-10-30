import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { UserTaskType, UserType } from '../user.model';
import { userTasks } from '../../user-list';

@Component({
  selector: 'user-profile',
  imports: [CardModule, ImageModule, DividerModule, ButtonModule, TagModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
})
export class UserProfile {
  allTasks: UserTaskType[] = userTasks;
  @Input({ required: true }) selectedUser!: UserType;

  get selectedUserTasks(): UserTaskType[] {
    if (this.selectedUser) {
      return userTasks.filter((task) => task.userId == this.selectedUser.id);
    } else {
      return [];
    }
  }
  getSeverity(status: string): 'success' | 'info' | 'warn' | 'secondary' | 'danger' | 'contrast' | null | undefined {
    console.log('status', status);
    switch (status) {
      case "in-progress":
        return "info";
      case "pending":
        return "warn";
      case "completed":
        return "success";
      default:
        return null;
    }
  }
}
