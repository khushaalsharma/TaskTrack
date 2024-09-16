// import { bootstrapApplication } from '@angular/platform-browser';

// import { AppComponent } from './app/app.component';
// import { HeaderComponent } from './app/header/header.component';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
//bootstrapApplication(HeaderComponent).catch((err) => console.error()); //this is not encouraged instead we follow a tree structure of components
//We will import header comp in app.comp.ts file first and then use it in app.comp.html

//This code above is used when we are dealing with standalone components in the beginning of the angular app

//for modules based components


import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

import { AppModule } from "./app/app.module"

platformBrowserDynamic().bootstrapModule(AppModule); //this tells angular that we will begin app by AppModule but still the root is need to be defined in the AppModule class under bootstrap attribute