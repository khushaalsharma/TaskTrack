import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { CommonModule } from "@angular/common";
import { sharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [TaskComponent, TasksComponent, NewTaskComponent],
    exports: [TasksComponent],
    imports: [CommonModule, sharedModule, FormsModule] //As DatePipe and CardComponent is used by TaskComponent thus we have to import them
    //CommonModule is similar to BrowserModule, BrowserModule is imported only once in root module
})
export class TaskModule{}