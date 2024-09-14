import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
//bootstrapApplication(HeaderComponent).catch((err) => console.error()); //this is not encouraged instead we follow a tree structure of components
//We will import header comp in app.comp.ts file first and then use it in app.comp.html