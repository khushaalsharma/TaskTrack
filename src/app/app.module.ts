import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
//If you don't import BrowserModule in the root module of a browser application, the application won't have the services it needs to launch and run in a browser

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";

import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { sharedModule } from "./shared/shared.module";
import { TaskModule } from "./tasks/tasks.module";

 
//Within imports array we'll add the components which are used by AppComponent
@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent], //this takes the list of all the components who are not standalone which need to work together to perform a function
    bootstrap: [AppComponent], //this takes an array of components which will be the root components
    imports: [BrowserModule, FormsModule, sharedModule, TaskModule]
})
export class AppModule {

}