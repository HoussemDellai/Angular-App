import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { DisplaylabelComponent } from './displaylabel/displaylabel.component';
import { EntertextComponent } from './entertext/entertext.component';
import { DisplaylistComponent } from './displaylist/displaylist.component';
import { AddtolistComponent } from './addtolist/addtolist.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplaylabelComponent,
    EntertextComponent,
    DisplaylistComponent,
    AddtolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
