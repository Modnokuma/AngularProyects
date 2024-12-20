import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({required:true}) task!: Task;
 // @Output()complete = new EventEmitter<string>();
  private TasksService = inject(TasksService);

  onCompleteTask(){
    //this.complete.emit(this.task.id);
    this.TasksService.removeTask(this.task.id);
  }

}
