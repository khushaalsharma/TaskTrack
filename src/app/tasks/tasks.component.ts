import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { Tasks } from './tasks.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { newTask } from './new-task/new-task.model';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required: true}) task !: Tasks;
  //@Output() newTask = new EventEmitter<boolean>();

  isAddingTask = false;
  //private tasksService = new TasksService(); //creating such an instance can be harmful as it is not global, ie more than 1 instance can cause data inconsistency, thus we ask angular to create a global instance or dependency injection by using a constructor
   
  constructor(private tasksService: TasksService){}// this is dependency injection

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.task.id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }
}
