import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { DatePipe } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { UserTaskType, UserType } from '../user.model';
import { AddNewTask } from './add-new-task/add-new-task';
import { UserProfileService } from '../user-profile.service'

@Component({
  selector: 'user-profile',
  imports: [CardModule, ImageModule, DividerModule, ButtonModule, TagModule, AddNewTask, DatePipe, Menu],
  providers: [DatePipe],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
  standalone: true
})
export class UserProfile implements OnChanges {
  showAddNewTask: boolean = false;
  @Input({ required: true }) selectedUser!: UserType;
  constructor(private datePipe: DatePipe, private taskService: UserProfileService) { }
  selectedUserTasks: UserTaskType[] = [];
  selectedTaskId: number = 0;
  getMenuItems(taskId: number = 0): MenuItem[] {
    return [
      {
        //label: 'Options',
        items: [
          {
            label: 'Completed',
            //icon: 'pi pi-refresh'
            command: () => {
              this.updateTaskStatus(taskId, 'completed')
            }
          },
          {
            label: 'In Progress',
            command: () => {
              this.updateTaskStatus(taskId, 'in-progress')
            }
            //icon: 'pi pi-upload'
          }
        ]
      }
    ];
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedUser'] && this.selectedUser) {
      this.selectedUserTasks = this.taskService.getUserTasks(this.selectedUser.id);
    }
  }
  getSeverity(status: string): 'success' | 'info' | 'warn' | 'secondary' | 'danger' | 'contrast' | null | undefined {
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

  onFormSubmit(task: UserTaskType) {
    task.dueDate = this.datePipe.transform(task.dueDate, 'yyyy-MM-dd');
    console.log('onFormSubmit event emitted :', task);
    this.taskService.addUserTask(task);
    this.selectedUserTasks = this.taskService.getUserTasks(this.selectedUser.id);
    this.showAddNewTask = false;
  }

  cancelAddNewTask() {
    this.showAddNewTask = false;
  }

  updateTaskStatus(id: number, status: string) {
    console.log('status :', status, 'id :', id)
    this.taskService.changeTaskStatus(id,status);
  }
}
