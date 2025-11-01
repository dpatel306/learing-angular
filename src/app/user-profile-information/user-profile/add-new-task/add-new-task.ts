import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { UserTaskType } from '../../user.model';

@Component({
  selector: 'app-add-new-task',
  imports: [FormsModule, CardModule, FloatLabelModule, InputTextModule, TextareaModule, ButtonModule, DatePickerModule],
  templateUrl: './add-new-task.html',
  styleUrl: './add-new-task.scss',
})
export class AddNewTask implements OnInit {
  minDate: Date | undefined;
  @Input({ required: true }) userId!: number;
  @Output() cancelled = new EventEmitter<boolean>();
  @Output() submitted = new EventEmitter<UserTaskType>();
  task: UserTaskType = {
    userId: 0,
    title: '',
    description: '',
    dueDate: '',
    status: 'pending'
  }
  onSubmit() {
    this.task.userId = this.userId;
    this.task.id = new Date().getTime();
    console.log('Added value', this.task);
    this.submitted.emit(this.task);
  }
  onCancel() {
    this.cancelled.emit(true);
  }

  ngOnInit() {
    this.minDate = new Date();
  }
}
