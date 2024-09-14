import { Component, EventEmitter, Input, Output} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})

export class UserComponent {
  //selectedUser = DUMMY_USERS[randomIndex]; //public property by default, follows Zone.js for state change
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // // get imagePath(){ //getter
  // //   return ('assets/users/' + this.selectedUser().avatar);
  // // } //preferred using when normal identifiers are used for state management

  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar); //will be changed only if used signal is changed

  // onSelectUser(){ //changing state of the identifier using this click function
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   //this.selectedUser = DUMMY_USERS[randomIndex]; //follows Zone.js method
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]); //if we are using signals then we can't call these state vars normally in html instead like a method

  //by using Input decorator we allow the component to receive a value/input from the parent component or user
  //signal equivalent avatar = input.required<string>(); 
  @Input({required: true}) user !: User;
  @Input({required: true}) selected!: boolean;
  //Initially for @Input() avatar we were receiving an error from typescript it asking for it's type as initially its "any"
  //thus we add ": string" to it specifying that this property will take string, we get another error for not assigining this prop any value
  // as this prop will get value assigned dynamically thus we add ! before : telling typescript that it will get value later on
  //The exclamation mark ! is called a definite assignment assertion. It tells TypeScript that you are sure this property will be assigned a value, even though it's not being initialized when the class is created. This prevents TypeScript from throwing an error about the property potentially being undefined.

  @Output() select = new EventEmitter<string>(); //this sends value of type string to another component when associated event occurs

  get imagePath(){
    return 'assets/users/' + this.user.avatar ;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  } 
}
