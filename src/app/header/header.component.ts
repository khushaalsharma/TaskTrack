import { Component } from "@angular/core";

//@Component is a decorator
@Component({ //takes a configuration object like in app.component.ts
    selector: 'app-header',  //specifies the HTML tag you will use to insert this component into the other templates
    //here we use <app-header></app-header> to display this component
    // template: '<h1>Hello World</h1>', //not a recommended approach instead use a templateUrl
    standalone: true,
    //
    templateUrl: './header.component.html', //defines the path to an external HTML file that contains the template (view) for this component.
    styleUrl: './header.component.css'  //we can also add multiple CSS files using Urls property and adding urls in array
})
export class HeaderComponent{

}