import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { AppModule } from "../app.module";

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent], //this will make these components public so that other modules can use them
})

export class sharedModule {}