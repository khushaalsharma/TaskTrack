import { Component } from '@angular/core';

// import { HeaderComponent } from './header/header.component';
// import { UserComponent } from './user/user.component';
// import { TasksComponent } from './tasks/tasks.component';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  //imports: [HeaderComponent, UserComponent, TasksComponent], //doing this unloacks this Header Component for the App Component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users = DUMMY_USERS;
  selectedUserId ?: string; //this tells that its fine of it is'nt assigned a value

  onSelectUser(id: string){
    this.selectedUserId = id;
    //console.log("Selected user with id:" + id);
  }

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!; // ! means that it will definitely receive the value
  }
}
